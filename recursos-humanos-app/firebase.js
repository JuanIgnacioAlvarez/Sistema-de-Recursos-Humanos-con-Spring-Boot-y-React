// firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrxzPKfRshG6DYn3culCto8xjir9pZFCs",
  authDomain: "sistema-de-recursos-humanos.firebaseapp.com",
  projectId: "sistema-de-recursos-humanos",
  storageBucket: "sistema-de-recursos-humanos.appspot.com",
  messagingSenderId: "219872491335",
  appId: "1:219872491335:web:d3d026b8c093bb22d9be62",
  measurementId: "G-KZTKZZTTXG"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { db };