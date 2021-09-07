import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnnG_WmnagyZQPnIELlYAS6NMQczBJpSk",
  authDomain: "linkedin-clone-472b5.firebaseapp.com",
  projectId: "linkedin-clone-472b5",
  storageBucket: "linkedin-clone-472b5.appspot.com",
  messagingSenderId: "346991727432",
  appId: "1:346991727432:web:d2d0541292a75cfe31d97d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
