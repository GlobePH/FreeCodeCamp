import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div className="product-item col-md-4 text-center">
        <a className="product-content" href="#">
          <div className="thumbnail product-thumbnail">
            <img src={this.props.imgURL} alt="product" />
          </div>
<<<<<<< HEAD
          <h3 className="product-title">
            <a href="eslint">
              {this.props.name}
            </a>
          </h3>
=======
          <h3 className="product-title">Product Name</h3>
>>>>>>> e3b254f2f3b62e9cf4ef15476f824314e43c0236
          <p className="product-price">$1.00</p>
        </a>
      </div>
    );
  }
}
