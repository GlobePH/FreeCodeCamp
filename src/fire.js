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

let cropTypes = 0;

fbDatabase.ref("crops").on("value", snap => {
  cropTypes = snap.val().length;
});

setInterval(() => {
  let randomCrop = Math.floor(Math.random() * cropTypes);
  let randomOperator = Math.floor(Math.random() * 2) > 0 ? -1 : 1;
  let randomQuantity = randomOperator * Math.floor(Math.random() * 5);
  fbDatabase.ref("crops").transaction(fruits => {
    if (fruits) {
      let ret = fruits;
      let newItem = ret[randomCrop];
      newItem.quantity = newItem.quantity + randomQuantity;
      ret.splice(randomCrop, 1, newItem);
      return ret;
    }
  });
}, 1000);
