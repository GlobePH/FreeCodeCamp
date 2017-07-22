import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div className="product-item col-md-4 text-center">
        <a className="product-content" href="/crops/test">
          <div className="thumbnail product-thumbnail"
            style={{backgroundImage: `url(${this.props.imgURL})`}}
          >
          </div>
          <h3 className="product-title">
              {this.props.name}
          </h3>
          <p className="product-price">
            Available stock: {this.props.quantity}g
          </p>
          <p className="product-price">
            Price per gram: ₱{Math.round(1 / this.props.quantity * 500 * 100) /
              100}
          </p>
        </a>
      </div>
    );
  }
}
