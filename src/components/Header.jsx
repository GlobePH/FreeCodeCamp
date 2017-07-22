import React, { Component } from "react";
import { connect } from "react-redux";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import Media from "react-media";

import "../styles/hamburger.css";
import "../styles/header.css";

class Header extends Component {
<<<<<<< HEAD
  render() {
=======
  constructor(props) {
    super(props);
    this.state = {
      mmenuOpen: false
    };
  }

  handleHamburgerClick() {
    this.setState({ mmenuOpen: !this.state.mmenuOpen });
    console.log(this.state.mmenuOpen);
  }

  render(){
    const {mmenuOpen} = this.state
>>>>>>> c0cee7896d8fb5beb955462da6b4ed0a49685a84
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header pull-left">
            <div className="navbar-brand">
              <Link to="/">
                <i className="fa fa-free-code-camp" aria-hidden="true" />.
                Farmbase
              </Link>
            </div>
            <Logout />
          </div>

          <Media query="(min-width: 768px)">
<<<<<<< HEAD
            {matches =>
              matches
                ? <div className="pull-right">
                    <div className="account-nav pull-right">
                      <Link to="/cart">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        />Cart
                      </Link>
                    </div>
                    <ul className="nav navbar-nav pull-right">
                      <li className="active">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/crops">Crops</Link>
                      </li>
                      <li>
                        <a href="/">Page 2</a>
                      </li>
                      <li>
                        <a href="/">Page 3</a>
                      </li>
                    </ul>
                  </div>
                : <div className="pull-right">
                    <button
                      className="hamburger hamburger--elastic"
                      type="button"
                    >
                      <span className="hamburger-box">
                        <span className="hamburger-inner" />
                      </span>
                    </button>
                  </div>}
=======
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
                    <Link to="/crops">Catalogue</Link>
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
                <button className={!mmenuOpen ? 'hamburger hamburger--elastic' : 'hamburger hamburger--elastic is-active'} type="button" onClick={this.handleHamburgerClick.bind(this)}>
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <div className={mmenuOpen ? 'mmenu-overlay open' : 'mmenu-overlay'} onClick={this.handleHamburgerClick.bind(this)}></div>
                <div className={mmenuOpen ? 'mmenu open' : 'mmenu'}>
                  <p className="mmnenu-close" onClick={this.handleHamburgerClick.bind(this)}>&times;</p>
                  <ul className="mmenu-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/crops">Catalogue</Link>
                    </li>
                    <li>
                      <a href="/">Page 2</a>
                    </li>
                    <li>
                      <a href="/">Page 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
>>>>>>> c0cee7896d8fb5beb955462da6b4ed0a49685a84
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
