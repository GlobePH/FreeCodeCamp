import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductIndex extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="ProductIndex">
        <div className="container product-list">
          <div className="row">
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    );
  }
}
