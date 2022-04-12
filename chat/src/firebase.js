import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBr_eZ9lRs1o5mHB3BBIz6phEL5X8BofXQ",
    authDomain: "chat-14155.firebaseapp.com",
    projectId: "chat-14155",
    storageBucket: "chat-14155.appspot.com",
    messagingSenderId: "835191535523",
    appId: "1:835191535523:web:175cb6f1a76a1ef0384c16",
}).auth();
