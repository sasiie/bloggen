// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV28lH5FVO6_eggnwTT32FknVglF_x_mY",
  authDomain: "saras-blogg.firebaseapp.com",
  projectId: "saras-blogg",
  storageBucket: "saras-blogg.appspot.com",
  messagingSenderId: "588105150091",
  appId: "1:588105150091:web:3555bde1a911c6b0c3ae8e",
  measurementId: "G-QD9NB1NXD1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
