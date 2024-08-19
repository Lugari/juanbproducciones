import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJ3EVNVpyGS7hxYge6Psp3gtZxMkKyorw",
    authDomain: "juanbproducciones-db2c4.firebaseapp.com",
    projectId: "juanbproducciones-db2c4",
    storageBucket: "juanbproducciones-db2c4.appspot.com",
    messagingSenderId: "405985151089",
    appId: "1:405985151089:web:d37dbc2b5bd49dacb933d0",
    measurementId: "G-2SG2VTWYMC"};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);