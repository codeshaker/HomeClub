import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDODA4-KyWin4stnngsYK6Q6saGSCGHx7c",
  authDomain: "homeclub-5372f.firebaseapp.com",
  databaseURL: "https://homeclub-5372f.firebaseio.com",
  projectId: "homeclub",
  storageBucket: "homeclub.appspot.com",
  messagingSenderId: "162320413906",
  appId: "1:162320413906:web:1843efb86edf1fc2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
