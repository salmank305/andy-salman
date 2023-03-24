import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD5z6k0jIl0nyrlq4oa5_Dh8nStEAc7x6s",
  authDomain: "andyproject-48f96.firebaseapp.com",
  projectId: "andyproject-48f96",
  storageBucket: "andyproject-48f96.appspot.com",
  messagingSenderId: "918999521594",
  appId: "1:918999521594:web:ff9933b4c1d93a1cf81803"
};

const app = initializeApp(firebaseConfig);
export const authentification =getAuth()