const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/signup') {
    try {
      let data = '';

      req.on('data', (chunk) => {
        data += chunk;
      });

      req.on('end', async () => {
        const { email, password } = JSON.parse(data);

        // Read existing accounts or create an empty array
        let accounts = [];
        try {
          const data = await fs.readFile(path.join(__dirname, 'epicdatabase', 'accounts.json'), 'utf-8');
          accounts = JSON.parse(data);
        } catch (error) {
          if (error.code !== 'ENOENT') {
            throw error;
          }
        }

        // Check if the email already exists
        if (accounts.some((account) => account.email === email)) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Email already exists' }));
          return;
        }

        // Add the new account
        accounts.push({ email, password });

        // Write the updated accounts array to the file
        await fs.writeFile(path.join(__dirname, 'epicdatabase', 'accounts.json'), JSON.stringify(accounts, null, 2));

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      });
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  } else {
    // Serve static files from the /pages/ directory
    const filePath = path.join(__dirname, '..', 'pages', req.url === '/' ? 'signup.html' : req.url);
    try {
      const fileContent = await fs.readFile(filePath);
      res.writeHead(200, { 'Content-Type': getContentType(filePath) });
      res.end(fileContent);
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  }
});

const getContentType = (filePath) => {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'application/javascript';
    default:
      return 'text/plain';
  }
};

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
