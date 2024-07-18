// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjVev8ryhqz5qXdWeXQspMiWgwnxnnUrc",
  authDomain: "ofengineering-1720452961939.firebaseapp.com",
  projectId: "ofengineering-1720452961939",
  storageBucket: "ofengineering-1720452961939.appspot.com",
  messagingSenderId: "672161891170",
  appId: "1:672161891170:web:1e3947869c58bc3846223b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app)

export {app,storage}