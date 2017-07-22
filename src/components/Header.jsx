import React from "react";
import { connect } from "react-redux";
import Logout from "./Logout";

const Header = props => {
  console.log(props.authenticated);
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="navbar-brand">Farmbase</div>
          <span>
            Authenticated?
            {props.authenticated.toString()}
          </span>
          <Logout />
        </div>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
