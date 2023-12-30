import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDLtLg1jNvEgWLW5F2K7Tzn80jCECS9BLs",
  authDomain: "crud-9f61e.firebaseapp.com",
  projectId: "crud-9f61e",
  storageBucket: "crud-9f61e.appspot.com",
  messagingSenderId: "830486219098",
  appId: "1:830486219098:web:3bce92efe6994e39280b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

