//1. import the dependencies
import firebase from 'firebase';
import 'firebase/auth';
import Axios from 'axios';

const firebaseConfig = {
  apiKey: 'AIzaSyAF-GBA5qKD2lm7JrHAd5HmGsbA9cQAkwA',
  authDomain: 'fpe-write-text.firebaseapp.com',
  projectId: 'fpe-write-text',
  storageBucket: 'fpe-write-text.appspot.com',
  messagingSenderId: '322888587269',
  appId: '1:322888587269:web:ee5f47353415bacfa9646c'
};

//2. Initialize app with the config vars
const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAuth = firebase.auth();
const store = firebase.firestore();
const db = firebase.database();

//3. export it for use
export { firebaseApp, db, store, firebaseAuth, Axios };
