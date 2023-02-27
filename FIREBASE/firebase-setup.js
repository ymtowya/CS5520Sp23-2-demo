// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import {apiKey } from "@env";
import {apiKey, } from "@env";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "cs5520-demo-b01a8.firebaseapp.com",
  projectId: "cs5520-demo-b01a8",
  storageBucket: "cs5520-demo-b01a8.appspot.com",
  messagingSenderId: "2896502310",
  appId: "1:2896502310:web:dabc21543462a904e050e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const firestore = getFirestore(app);