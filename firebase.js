import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoGVVT76B_619BbnCouv6fqn5rB9Y_ABg",
  authDomain: "translator-app-20045.firebaseapp.com",
  projectId: "translator-app-20045",
  storageBucket: "translator-app-20045.appspot.com",
  messagingSenderId: "992055439597",
  appId: "1:992055439597:web:e42931b32d9edadc409ce4",
};

let app;
if (firebase.app.length > 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

export { db };
