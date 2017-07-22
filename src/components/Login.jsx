import React, { Component } from "react";
import "../styles/login.css";
import { fbAuth } from "../fire";
import { connect } from "react-redux";
import { loginAction } from "../actions/login";

class Login extends Component {
  constructor(props) {
    super(props);
    fbAuth.onAuthStateChanged(user => {
      user ? props.dispatch(loginAction()) : console.error("Not logged in");
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

  handleLogin() {
    fbAuth.signInWithEmailAndPassword(
      this.state.userEmail,
      this.state.userPass
    );
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

export default connect()(Login);
