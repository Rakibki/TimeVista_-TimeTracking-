// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ35onsbbkPd3haGmQ1A0MDGtlEoRDJVc",
  authDomain: "time-traking-36537.firebaseapp.com",
  projectId: "time-traking-36537",
  storageBucket: "time-traking-36537.appspot.com",
  messagingSenderId: "146679249088",
  appId: "1:146679249088:web:7e6637f116d580f04d1525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth