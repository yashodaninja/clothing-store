import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbhQvL8vsbI773PY5xN5M2BxpWUf1CjMw",
  authDomain: "clothing-store-db-c92b4.firebaseapp.com",
  projectId: "clothing-store-db-c92b4",
  storageBucket: "clothing-store-db-c92b4.appspot.com",
  messagingSenderId: "673862072688",
  appId: "1:673862072688:web:c020f0427991e12cb677b5",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db= getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());
}
