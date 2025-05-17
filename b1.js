// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa0fVdtFDjxy_BtLm7X5ihsbpUILB1QTk",
  authDomain: "cong12345-307d7.firebaseapp.com",
  projectId: "cong12345-307d7",
  storageBucket: "cong12345-307d7.firebasestorage.app",
  messagingSenderId: "240405272298",
  appId: "1:240405272298:web:bfd141f28c4a0a69be2993",
  measurementId: "G-NZBHPVCBG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
let btn = document.getElementById('login')
btn.addEventListener("click", function () {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Login success");
        window.location.href = './trangchu.html';
    })
})
