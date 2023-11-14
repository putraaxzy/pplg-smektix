// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3LV45-d2Do2U1qxzXZyzgKWZ6Es3vk_o",
  authDomain: "pplg-smektix.firebaseapp.com",
  projectId: "pplg-smektix",
  storageBucket: "pplg-smektix.appspot.com",
  messagingSenderId: "219991368812",
  appId: "1:219991368812:web:6e418f22f55bf4e4a8e449",
  measurementId: "G-GR00PBTXTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();