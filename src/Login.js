import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import MessageIcon from "@mui/icons-material/Message";
//import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//import "firebase/compat/auth";
//import firebase, { auth } from "firebase";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/firebase-auth";
import { auth, provider } from "./firebase";
function Login() {
  // const signIn = () => {
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyDNZQ9xuWOJtm4b3LGnRrmQnctGHodKwUQ",
  //     authDomain: "chat-app-70533.firebaseapp.com",
  //     projectId: "chat-app-70533",
  //     storageBucket: "chat-app-70533.appspot.com",
  //     messagingSenderId: "905110194113",
  //     appId: "1:905110194113:web:7a8e129a786b19bfe39140",
  //     measurementId: "G-2DJFKMR1RB",
  //   };
  //   const app = firebase.initializeApp(firebaseConfig);
  //   const auth = getAuth(app);

  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const name = result.user.displayName;

  //       const email = result.user.email;
  //       console.log(name, email);
  //       const profilePic = result.user.photoURL;

  //       localStorage.setItem("name", name);
  //       localStorage.setItem("email", email);
  //       localStorage.setItem("profilePic", profilePic);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        <MessageIcon id="img" />

        <div className="login-text">{/* <h1>Sign In </h1> */}</div>
        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
