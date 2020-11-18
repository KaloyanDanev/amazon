import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "fir-9a772.firebaseapp.com",
    databaseURL: "https://fir-9a772.firebaseio.com",
    projectId: "fir-9a772",
    storageBucket: "fir-9a772.appspot.com",
    messagingSenderId: "32531307762",
    appId: "1:32531307762:web:d0b3fbad7e9b6569b3046b",
    measurementId: "G-KPKLGJ24NK"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
