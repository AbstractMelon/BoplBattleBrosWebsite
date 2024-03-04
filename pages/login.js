// pages/login.js

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
        console.log('Login successful!', userCredential.user);
        // Redirect to another page or perform additional actions
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error.message);
        // Display an error message to the user
      });
  });
  