import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzF0cTz1uZikLM1kkZwD3bYg6sU6I9J-w",
  authDomain: "aulafirebase-82be8.firebaseapp.com",
  projectId: "aulafirebase-82be8",
  storageBucket: "aulafirebase-82be8.appspot.com",
  messagingSenderId: "857433069109",
  appId: "1:857433069109:web:29444c5c898479653f037c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};