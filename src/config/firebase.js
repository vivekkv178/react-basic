import firebase from "firebase";
import config from "./config.json";

// Configure Firebase.
const firebaseConfig = {
  apiKey: config.firebase_config.api_key,
  authDomain: config.firebase_config.auth_domain,
  projectId: config.firebase_config.project_id,

  // ...
};
firebase.initializeApp(firebaseConfig);

export default firebase;
