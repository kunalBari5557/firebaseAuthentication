import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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