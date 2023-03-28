import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDRDbASJ8F3nT_CjDhP0pNbSVUNe8XGuXE',
  authDomain: 'messenger-90db7.firebaseapp.com',
  projectId: 'messenger-90db7',
  storageBucket: 'messenger-90db7.appspot.com',
  messagingSenderId: '463377800908',
  appId: '1:463377800908:web:ff401c479fc8deb9b5ac69',
};

export const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const storage = getStorage();

export { auth, storage, db };
