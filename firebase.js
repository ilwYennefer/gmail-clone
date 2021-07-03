import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8ISM5NnuVOhQiGNXKv20QrDo6mI6Fdbs",
  authDomain: "clone-50ee1.firebaseapp.com",
  projectId: "clone-50ee1",
  storageBucket: "clone-50ee1.appspot.com",
  messagingSenderId: "889077493296",
  appId: "1:889077493296:web:c8cb0a23be86f84e44c7f5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

export { auth, db };
