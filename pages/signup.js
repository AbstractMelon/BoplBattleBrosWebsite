// signup.js

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Account created successfully');
        // Redirect or perform other actions on success
      } else {
        const data = await response.json();
        console.error(data.error);
        // Handle error, e.g., display an error message to the user
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  });
});
