import firebase from "firebase";

const firebaseConfig = {
  // enter config from your firebase project
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
