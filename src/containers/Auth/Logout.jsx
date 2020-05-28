import React, { useEffect } from "react";
import firebase from "../../config/firebase";
import { Redirect } from "react-router-dom";

export default function Logout() {
  useEffect(() => {
    firebase.auth().signOut();
    localStorage.removeItem("signedIn");
  }, []);
  return (
    <div>
      <Redirect to="/" />
    </div>
  );
}
