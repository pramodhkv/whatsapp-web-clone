import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXxIy-5J6d-93-yUpOrNs05QUmvC58-pc",
  authDomain: "whatsapp-web-clone-pramodh.firebaseapp.com",
  projectId: "whatsapp-web-clone-pramodh",
  storageBucket: "whatsapp-web-clone-pramodh.appspot.com",
  messagingSenderId: "253285813311",
  appId: "1:253285813311:web:8da3b8349a7dffc9cffc8a",
  measurementId: "G-NL75PTHVZ1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
