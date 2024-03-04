// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);