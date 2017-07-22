import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
  }

  handleLogin() {}

  render() {
    return (
      <div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={this.handleLogin.bind(this)} />
      </div>
    );
  }
}
