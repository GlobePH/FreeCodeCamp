import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutAction } from "../actions/login";

class Logout extends Component {
  logoutHandler = () => {
    this.props.dispatch(logoutAction());
  };

  render() {
    if (this.props.auth) {
      return <button onClick={this.logoutHandler}>Log Out</button>;
    }
    return false;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Logout);
