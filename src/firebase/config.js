 
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import{getStorage} from "firebase/storage"
 
 export const firebaseConfig = {
  apiKey: "AIzaSyDxQhCZzFcnlMWcyHdQk4wQBi4e0BR00B4",
  authDomain: "eshop-27125.firebaseapp.com",
  projectId: "eshop-27125",
  storageBucket: "eshop-27125.appspot.com",
  messagingSenderId: "944602297610",
  appId: "1:944602297610:web:27b7b565979f8cd6cf76f3",
  measurementId: "G-BVK4J8YEQ7"
};

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;
