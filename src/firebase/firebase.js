// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnK1zskvhsDhQpoPrtuc9-rMYN-UjRh20",
  authDomain: "cineswipe-7669d.firebaseapp.com",
  projectId: "cineswipe-7669d",
  storageBucket: "cineswipe-7669d.appspot.com",
  messagingSenderId: "23219671916",
  appId: "1:23219671916:web:a8a2ce8c755c859420d949",
  measurementId: "G-L9Y27K04GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);