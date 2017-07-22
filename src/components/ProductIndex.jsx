import React, { Component } from "react";
import { fbDatabase } from "../fire";
import ProductItem from "./ProductItem";

export default class ProductIndex extends Component {
  constructor() {
    super();
    this.state = {
      crops: []
    };
  }

  componentWillMount() {
    fbDatabase.ref("crops").on("value", snap => {
      console.log(snap.val());
      this.setState({ crops: snap.val() });
      return false;
    });
  }

  render() {
<<<<<<< HEAD
    return (
      <div className="ProductIndex">
        {this.state.crops.map(crop =>
          <ProductItem key={crop.id} name={crop.name} imgURL={crop.imgURL} />
        )}
=======
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
>>>>>>> e3b254f2f3b62e9cf4ef15476f824314e43c0236
      </div>
    );
  }
}
