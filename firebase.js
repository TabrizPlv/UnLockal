//import * as firebase from 'firebase';
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import { getAuth,} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-g4de4GstXyNOkpATCJodjSexUMU74WE",
  authDomain: "unlockal-1491f.firebaseapp.com",
  projectId: "unlockal-1491f",
  storageBucket: "unlockal-1491f.appspot.com",
  messagingSenderId: "113719280267",
  appId: "1:113719280267:web:f710ec68cd7ab2fb13ca8e",
  measurementId: "G-H836CHW91D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {
  db,
  app,
  //auth
};
