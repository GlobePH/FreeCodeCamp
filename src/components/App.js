import React, { Component } from "react";
import "../styles/App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import firebase from "firebase";
import firebaseui from "firebaseui";

firebase.initializeApp({
  apiKey: "AIzaSyAQPIoN8G0GV9hYd1mN30Y6mKjFLGQhnqA",
  authDomain: "globe-hackathon.firebaseapp.com",
  databaseURL: "https://globe-hackathon.firebaseio.com",
  projectId: "globe-hackathon",
  storageBucket: "globe-hackathon.appspot.com",
  messagingSenderId: "246767341490"
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar style={{ position: "relative", padding: 10 }}>
            Globe Hackathon
          </AppBar>
          <Button>Hello</Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
