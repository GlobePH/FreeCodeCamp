import React, { Component } from "react";
import { connect } from "react-redux";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import Media from 'react-media'

import "../styles/hamburger.css";
import "../styles/header.css";

// const Header = props => {
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render(){
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
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Catalogue</Link>
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
                <button className="hamburger hamburger--elastic" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button> 
              </div>
            )}
          </Media>
        </div>
      </nav>
    );
  }
}
// };

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
