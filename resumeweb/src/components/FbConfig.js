// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASVEQV73px5eua5oCxt06fdBXZLJMq9AE",
  authDomain: "resumeweb-cf63b.firebaseapp.com",
  projectId: "resumeweb-cf63b",
  storageBucket: "resumeweb-cf63b.appspot.com",
  messagingSenderId: "977877813245",
  appId: "1:977877813245:web:2ce9dff5ee50648c21fb94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app