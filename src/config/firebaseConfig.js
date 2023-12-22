import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCC2O9sKSM8dzHQYYvhULJXGDUQ6fkXosw",
  authDomain: "curso-react-alex.firebaseapp.com",
  projectId: "curso-react-alex",
  storageBucket: "curso-react-alex.appspot.com",
  messagingSenderId: "848179178061",
  appId: "1:848179178061:web:dad8bf14cc67a32d350a04"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);