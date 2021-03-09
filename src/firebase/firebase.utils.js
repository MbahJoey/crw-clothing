import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBxaQiysNstNC1hNPp5r-VY3fg0H86efCQ",
  authDomain: "crw-db-86f3e.firebaseapp.com",
  projectId: "crw-db-86f3e",
  storageBucket: "crw-db-86f3e.appspot.com",
  messagingSenderId: "33632169784",
  appId: "1:33632169784:web:2e739608a0ab1ca22bdbcd",
  measurementId: "G-LD8QE2X07B",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;