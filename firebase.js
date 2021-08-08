import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8Rj6OXXD8P7PppAaTOr65HFJohBLe9vU",
  authDomain: "signal-clone-c15d8.firebaseapp.com",
  projectId: "signal-clone-c15d8",
  storageBucket: "signal-clone-c15d8.appspot.com",
  messagingSenderId: "455619519361",
  appId: "1:455619519361:web:b3d7b5a3e08bef713a3e80",
  measurementId: "G-GF19KVF6E0",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
