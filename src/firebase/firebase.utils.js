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
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;