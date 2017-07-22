import * as firebase from "firebase";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQPIoN8G0GV9hYd1mN30Y6mKjFLGQhnqA",
  authDomain: "globe-hackathon.firebaseapp.com",
  databaseURL: "https://globe-hackathon.firebaseio.com",
  projectId: "globe-hackathon",
  storageBucket: "globe-hackathon.appspot.com",
  messagingSenderId: "246767341490"
};

firebase.initializeApp(firebaseConfig);

export const fbDatabase = firebase.database();
export const fbAuth = firebase.auth();
