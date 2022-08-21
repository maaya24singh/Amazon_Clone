// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC2e6P0AnnrMI4EWh8qIHrciuOmyqxCLqk",
  authDomain: "eclone-f57ba.firebaseapp.com",
  databaseURL: "https://eclone-f57ba-default-rtdb.firebaseio.com",
  projectId: "eclone-f57ba",
  storageBucket: "eclone-f57ba.appspot.com",
  messagingSenderId: "142736123202",
  appId: "1:142736123202:web:a80e36dd15954987c814db",
  measurementId: "G-3Z3BPS1LS1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
