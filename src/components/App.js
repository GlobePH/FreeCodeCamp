import React, { Component } from "react";
<<<<<<< HEAD
import * as firebase from "firebase";
import "firebase/database";
=======
import { Switch, Route } from 'react-router-dom';
import firebase from "firebase";
import firebaseui from "firebaseui";

import Header from './Header';
>>>>>>> Add react router

firebase.initializeApp({
  apiKey: "AIzaSyAQPIoN8G0GV9hYd1mN30Y6mKjFLGQhnqA",
  authDomain: "globe-hackathon.firebaseapp.com",
  databaseURL: "https://globe-hackathon.firebaseio.com",
  projectId: "globe-hackathon",
  storageBucket: "globe-hackathon.appspot.com",
  messagingSenderId: "246767341490"
});

const db = firebase.database();

class App extends Component {
  constructor() {
    super();
    this.state = { firebaseTester: "asdfjanskjdfhaskjdf" };
    db.ref().on("value", snap => {
      this.setState({ firebaseTester: snap.val().testKey });
    });
  }

  render() {
    return (
      <div>
        <span style={{ position: "absolute", left: "50%", top: "50%" }}>
          {this.state.firebaseTester}
        </span>
      </div>
    );
  }
}

export default App;
