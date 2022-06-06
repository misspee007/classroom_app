import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBP4ekLyCXnJ14TCIOCzPUKGNEg9k6au6k",
  authDomain: "react-auth-b189b.firebaseapp.com",
  projectId: "react-auth-b189b",
  storageBucket: "react-auth-b189b.appspot.com",
  messagingSenderId: "596345833067",
  appId: "1:596345833067:web:13a4171aafd25a7207932e",
  measurementId: "G-ZC57SB5CYV",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { provider, auth };
export default getFirestore();