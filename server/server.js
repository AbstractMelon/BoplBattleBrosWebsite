// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Read existing accounts from JSON file
  const accountsPath = './server/epicdatabase/accounts.json';
  const accountsData = JSON.parse(fs.readFileSync(accountsPath, 'utf8'));

  // Check if the email is already taken
  if (accountsData[email]) {
    return res.status(400).json({ error: 'Email already in use' });
  }

  // Add new account
  accountsData[email] = { password };

  // Save updated accounts to JSON file
  fs.writeFileSync(accountsPath, JSON.stringify(accountsData, null, 2));

  res.status(200).json({ message: 'Signup successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
