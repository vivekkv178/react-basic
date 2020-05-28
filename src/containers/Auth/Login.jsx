// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../config/firebase";
import { Redirect } from "react-router-dom";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/crud",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

class Login extends React.Component {
  state = {
    isSignedIn: false, // Local signed-in state.
  };

  componentDidMount() {
    if (localStorage.getItem("signedIn"))
      this.setState({
        isSignedIn: 1,
      });
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (user) localStorage.setItem("signedIn", 1);
      this.setState({
        isSignedIn: user ? user : localStorage.getItem("signedIn"),
      });
    });
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    firebase.auth().signOut();
    this.unregisterAuthObserver();
  }

  signout = () => {
    this.unregisterAuthObserver();
    firebase.auth().signOut();
    localStorage.removeItem("signedIn");
    this.setState({ isSignedIn: false });
  };
  render() {
    return (
      <>
        <h1>Basic Crud</h1>
        {!this.state.isSignedIn ? (
          <>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </>
        ) : (
          <Redirect to="/crud" />
        )}
      </>
    );
  }
}

export default Login;
