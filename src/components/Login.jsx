import React, { Component } from "react";
import "../styles/login.css";
import { fbAuth } from "../fire";
import { connect } from "react-redux";
import { loginAction } from "../actions/login";

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    fbAuth.onAuthStateChanged(user => {
<<<<<<< HEAD
      if (user) {
        console.log("MAH USER IZ", user);
      } else {
        console.log("NO USER. SAD.");
=======
      console.log('USER RESPONSE', user);
      if (user) {
        props.dispatch(loginAction());
        console.log('THIS IS STATE', props.state);
      } else {
        console.error('FAIL');
>>>>>>> e3b254f2f3b62e9cf4ef15476f824314e43c0236
      }
    });
    this.state = {
      userEmail: "",
      userPass: ""
    };
  }

  handleUserEmailInput(e) {
    this.setState({ userEmail: e.target.value });
  }

  handleUserPassInput(e) {
    this.setState({ userPass: e.target.value });
  }

  handleLogin(e) {
    e.preventDefault();
<<<<<<< HEAD
    fbAuth
      .signInWithEmailAndPassword(this.state.userEmail, this.state.userPass)
      .then(() => this.props.dispatch(loginAction()))
      .catch(error => console.error(error));
=======
    fbAuth.signInWithEmailAndPassword(
      this.state.userEmail,
      this.state.userPass
    )
    .catch(err => {
      console.log('DAMN YOU', err);
    })
>>>>>>> e3b254f2f3b62e9cf4ef15476f824314e43c0236
  }

  render() {
    return (
      <div className="login-container container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <form>
              <div className="app-logo text-center">
                <h1>Farmbase</h1>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email:{this.state.userEmail}
                </label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  onChange={this.handleUserEmailInput.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Password:{this.state.userPass}
                </label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleUserPassInput.bind(this)}
                />
              </div>
              <button
                onClick={this.handleLogin.bind(this)}
                className="btn btn-default"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Login);
