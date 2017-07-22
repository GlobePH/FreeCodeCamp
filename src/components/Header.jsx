import React from "react";
import { connect } from "react-redux";
import Logout from "./Logout";
import {Link} from 'react-router-dom'

import "../styles/header.css";

const Header = props => {
  console.log(props.authenticated);
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <div className="navbar-brand">Farmbase</div>
          <Logout />
        </div>
        <div className="account-nav pull-right">
            <Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart</Link>
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
