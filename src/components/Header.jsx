import React from "react";
import { connect } from "react-redux";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import Media from 'react-media'

import "../styles/header.css";
import "../styles/hamburger.css";

const Header = props => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header pull-left">
          <div className="navbar-brand">
            <Link to="/">Farmbase</Link>
          </div>
          <Logout />
        </div>

        <Media query="(min-width: 768px)">
          {matches => matches ? (
            <div className="pull-right">
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
          ) : (
            <div className="pull-right">
              <button class="hamburger hamburger--elastic" type="button">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button> 
            </div>
          )}
        </Media>

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
