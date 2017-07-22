import React, { Component } from "react";

import "../styles/productIndex.css";

export default class ProductIndex extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="ProductIndex">
        <p>test Product Index</p>
      <div className="product-index">
        <div className="container product-list">
          <div className="row">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    );
  }
}
