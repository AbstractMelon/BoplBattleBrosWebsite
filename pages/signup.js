// pages/signup.js

// Import the necessary functions from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoKhTWti8w0qmOIt1Ra6GM1e6DVpFF24U",
  authDomain: "boplbattlebros.firebaseapp.com",
  projectId: "boplbattlebros",
  storageBucket: "boplbattlebros.appspot.com",
  messagingSenderId: "684464181469",
  appId: "1:684464181469:web:8cf483607b03092628cb34",
  measurementId: "G-D033CHKH6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Add event listener to the signup form
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign-up
        console.log('Sign-up successful!', userCredential.user);
        // Redirect to the stats page
        console.log("rederectiongs")
        window.location.href = "stats.html";
      })
      .catch((error) => {
        // Handle sign-up error
        console.error('Sign-up error:', error.message);
        // Display an error message to the user
      });
  });
