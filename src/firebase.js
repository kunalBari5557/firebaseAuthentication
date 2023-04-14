// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASdcmZMfEOSVYYqIaQds-axacbFaecpvk",
  authDomain: "fir-auth-51ed2.firebaseapp.com",
  projectId: "fir-auth-51ed2",
  storageBucket: "fir-auth-51ed2.appspot.com",
  messagingSenderId: "719969981806",
  appId: "1:719969981806:web:239d01f304ceaa18a25d7f",
  measurementId: "G-P50QM8G1E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);