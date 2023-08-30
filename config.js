import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyANko7Rjsf1n6i77icvtkltrZHeb8mTNCQ",
    authDomain: "e-ride--aj.firebaseapp.com",
    projectId: "e-ride--aj",
    storageBucket: "e-ride--aj.appspot.com",
    messagingSenderId: "780241594192",
    appId: "1:780241594192:web:307dd7c520ff645fe7ee55"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
