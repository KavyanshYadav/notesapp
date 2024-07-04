// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUwp-LqQBo7XcTz0xQ8oNBNhwloNMdFvg",
  authDomain: "noteapp-e8575.firebaseapp.com",
  projectId: "noteapp-e8575",
  storageBucket: "noteapp-e8575.appspot.com",
  messagingSenderId: "95083497289",
  appId: "1:95083497289:web:7c6835b30069813ce9bc98",
  measurementId: "G-EV0NHX65HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);