import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    return (
      <div className="product-item col-md-4 col-sm-6 text-center">
        <a className="product-content" href={`/crops/${this.props.name}`}>
          <div
            className="thumbnail product-thumbnail"
            style={{ backgroundImage: `url(${this.props.imgURL})` }}
          />
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

export default ProductItem;
