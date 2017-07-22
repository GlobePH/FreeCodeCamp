import React, { Component } from "react";
import ProductItem from './ProductItem';
import "../styles/productIndex.css";

export default class ProductIndex extends Component {
  constructor() {
    super();
  }

  render() {
    return(
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
