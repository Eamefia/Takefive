import firebase from 'firebase';

 
 const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyATtGv7pYc13LFIguiS4pfOwvziu55YlBY",
  authDomain: "take5-c0d4f.firebaseapp.com",
  databaseURL: "https://take5-c0d4f-default-rtdb.firebaseio.com",
  projectId: "take5-c0d4f",
  storageBucket: "take5-c0d4f.appspot.com",
  messagingSenderId: "328376478608",
  appId: "1:328376478608:web:3fc98c56ea8d3977aaa115",
  measurementId: "G-DJW3KXCSRM"
 });

 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const storage = firebase.storage();

 export { db, auth, storage }