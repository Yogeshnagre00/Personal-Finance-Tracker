import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVU3_UDRHlpi6ePydd4rFYLV33UBX9uok",
  authDomain: "finance-new-73868.firebaseapp.com",
  projectId: "finance-new-73868",
  storageBucket: "finance-new-73868.appspot.com",
  messagingSenderId: "912348692457",
  appId: "1:912348692457:web:25459f3acfefe9c2ff1578",
  measurementId: "G-9S7VJ518MY"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
