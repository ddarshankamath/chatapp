// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
//  import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyDNZQ9xuWOJtm4b3LGnRrmQnctGHodKwUQ",
  authDomain: "chat-app-70533.firebaseapp.com",
  projectId: "chat-app-70533",
  storageBucket: "chat-app-70533.appspot.com",
  messagingSenderId: "905110194113",
  appId: "1:905110194113:web:7a8e129a786b19bfe39140",
  measurementId: "G-2DJFKMR1RB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
