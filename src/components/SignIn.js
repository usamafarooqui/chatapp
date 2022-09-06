import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { auth } from "../firebase";
import { Button } from "@material-ui/core";
import "../App.css";
import Logo from "./google1.png";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <>
     
        <div className="signin">
          <div className="header"><h1>webMessenger</h1></div>
          <div className="signin-card">
            <Button className="btn-signin" onClick={signInWithGoogle}>
              Sign in With Google <img className="signimg" src={Logo} alt="" />
            </Button>
          </div>
        </div>
 
    </>
  );
}

export default SignIn;
