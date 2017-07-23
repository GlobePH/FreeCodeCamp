import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { firebaseConnect, dataToJS } from "react-redux-firebase";
import _ from "lodash";

import * as action from "../actions/cart";
import Cart from "./Cart";

class ProductDetail extends Component {
  state = {
    quantity: 0,
    name: "" || this.props.match.params.id
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ quantity: e.target.value });
  };

  addToCart = e => {
    e.preventDefault();
    this.props.addItem(
      this.state.name,
      this.state.quantity,
      this.state.lat,
      this.state.lng
    );
  };

  render() {
    let cropIndex;
    if (!this.props.crops) {
      return <span>Loading...</span>;
    } else {
      cropIndex = _.findIndex(
        this.props.crops,
        o => o.name === this.props.match.params.id
      );
    }
    return (
      <div className="product-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-3">

              <div className="product-detail-image">
                <img
                  src={this.props.crops[cropIndex].imgURL}
                  alt={this.props.crops[cropIndex].name}
                  className="img-responsive"
                />
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="product-detail-summary">
                <h1 className="pd-title">
                  {this.props.crops[cropIndex].name}
                </h1>
                <p className="pd-price">
                  ₱{Math.round(
                    1 / this.props.crops[cropIndex].quantity * 500 * 100
                  ) / 100}{" "}
                  bawat nguya
                </p>
                <form className="form-inline" onSubmit={this.addToCart}>
                  <div className="form-group">
                    <label>Quantity:</label>
                    <input
                      type="number"
                      onChange={this.handleInputChange}
                      className="form-control"
                      value={this.state.quantity}
                    />
                    <button type="submit" className="btn btn-primary">
                      Add to Cart{" "}
                    </button>
                    <div className="link-group">
                      <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
                      <Link to="/crops" className="btn btn-default">Back to Shop</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-3">
              <Cart />
            </div>
          
          </div>
          </div>
          
        </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  quantity: state.quantity,
  crops: dataToJS(state.firebase, "crops")
});

export default compose(
  firebaseConnect(["crops"]),
  connect(mapStateToProps, action)
)(ProductDetail);
