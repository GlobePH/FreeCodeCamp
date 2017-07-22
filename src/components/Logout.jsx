import React from "react";
import { connect } from "react-redux";

function Logout({ auth }) {
  if (auth) {
    return <button>Log Out</button>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Logout);
