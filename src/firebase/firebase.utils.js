import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBdM7s8PQBe1V3aDzIdbdaA_pebAwkVFOI",
    authDomain: "crwn-db-c0b95.firebaseapp.com",
    databaseURL: "https://crwn-db-c0b95.firebaseio.com",
    projectId: "crwn-db-c0b95",
    storageBucket: "crwn-db-c0b95.appspot.com",
    messagingSenderId: "1010420978833",
    appId: "1:1010420978833:web:36700673c1e91a84519b30",
    measurementId: "G-77NG9CHN4V"
  };
firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;