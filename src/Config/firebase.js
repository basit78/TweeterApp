import { initializeApp } from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth';
import {getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore"
import {getStorage, ref} from "firebase/storage";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyD1kAt2evlBOGN6cEIS4wz4vsNLHczOgKg",
    authDomain: "tweeter-9ba77.firebaseapp.com",
    projectId: "tweeter-9ba77",
    storageBucket: "tweeter-9ba77.appspot.com",
    messagingSenderId: "255731674225",
    appId: "1:255731674225:web:a7734cbdc96c03c4b83fd0",
    measurementId: "G-LH3LEGYCHE"
});
  const auth= getAuth();
  const db=getFirestore();
  const storage= getStorage();
  export{
      auth,
      db,
      storage,
      ref,
      onAuthStateChanged,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword   ,
      doc,
      setDoc,
      getFirestore,getDoc,
      addDoc,
      collection,
      getDocs,
      query,
      where,
      
  }


