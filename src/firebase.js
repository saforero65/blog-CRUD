import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVFPbf4EULkQxkE215SH44JrMoWZa3sLE",
  authDomain: "crudblog-a8361.firebaseapp.com",
  projectId: "crudblog-a8361",
  storageBucket: "crudblog-a8361.appspot.com",
  messagingSenderId: "183702092802",
  appId: "1:183702092802:web:76ce0783b71d4fa8b2bb1b",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
