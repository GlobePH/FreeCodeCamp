import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div className="product-item col-md-4 text-center">
        <div className="product-content">
          <div className="thumbnail product-thumbnail">
            <img src={this.props.imgURL} alt="product" />
          </div>
          <h3 className="product-title">
            <a href="eslint">
              {this.props.name}
            </a>
          </h3>
          <p className="product-price">$1.00</p>
        </div>
      </div>
    );
  }
}
