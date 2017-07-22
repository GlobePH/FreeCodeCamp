import React from "react";
import * as firebase from "firebase";
import "firebase/database";
import { Switch, Route } from 'react-router-dom';
import firebaseui from "firebaseui";

import "../styles/index.css";

import Header from './Header';
import Login from './Login';
import Landing from './Landing';

firebase.initializeApp({
  apiKey: "AIzaSyAQPIoN8G0GV9hYd1mN30Y6mKjFLGQhnqA",
  authDomain: "globe-hackathon.firebaseapp.com",
  databaseURL: "https://globe-hackathon.firebaseio.com",
  projectId: "globe-hackathon",
  storageBucket: "globe-hackathon.appspot.com",
  messagingSenderId: "246767341490"
});

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  )
}

export default App;
