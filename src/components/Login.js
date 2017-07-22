import React, { Component } from "react";
import "../styles/login.css";

export default class Login extends Component {
  constructor() {
    super();
  }

  handleLogin() {}

  render() {
    return (
      <div className="login-container container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <form>
              <div className="app-logo text-center"><h1>Farmbase</h1></div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input className="form-control" type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Password:</label>
                <input className="form-control" type="password" placeholder="Password" />
              </div>
              <button onClick={this.handleLogin.bind(this)} className="btn btn-default">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
