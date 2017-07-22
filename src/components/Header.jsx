import React from "react";
import { connect } from "react-redux";
import Logout from "./Logout";
import { Link } from "react-router-dom";

import "../styles/header.css";

const Header = props => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <div className="navbar-brand">
            <Link to="/">Farmbase</Link>
          </div>
          <Logout />
        </div>
        <div className="account-nav pull-right">
          <Link to="/cart">
            <i className="fa fa-shopping-cart" aria-hidden="true" />Cart
          </Link>
        </div>
        <ul className="nav navbar-nav pull-right">
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Page 1</a>
          </li>
          <li>
            <a href="/">Page 2</a>
          </li>
          <li>
            <a href="/">Page 3</a>
          </li>
        </ul>
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
