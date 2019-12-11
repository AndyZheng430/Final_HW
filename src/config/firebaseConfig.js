import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// THIS IS USED TO INITIALIZE THE firebase OBJECT
// PUT YOUR FIREBASE PROJECT CONFIG STUFF HERE
var firebaseConfig = {
    apiKey: "AIzaSyCpoRjCkIdOl8cV6bMGRLGXpKz0A65S_cI",
    authDomain: "final-hw-9b876.firebaseapp.com",
    databaseURL: "https://final-hw-9b876.firebaseio.com",
    projectId: "final-hw-9b876",
    storageBucket: "final-hw-9b876.appspot.com",
    messagingSenderId: "1072380511491",
    appId: "1:1072380511491:web:f81ed56336657cf8b0d536",
    measurementId: "G-SV2ENFCJPX"
};
firebase.initializeApp(firebaseConfig);

// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;