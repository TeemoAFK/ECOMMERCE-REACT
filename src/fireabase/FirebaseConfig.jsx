// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHmt7xqee72_TGHcSxw8ccRho19FcJUZM",
  authDomain: "tienda-mateo.firebaseapp.com",
  projectId: "tienda-mateo",
  storageBucket: "tienda-mateo.appspot.com",
  messagingSenderId: "1020050381134",
  appId: "1:1020050381134:web:1a2d58a6db40635e2c661f",
  measurementId: "G-QBHWF7K7M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}