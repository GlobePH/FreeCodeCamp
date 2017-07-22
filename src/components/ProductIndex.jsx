import React, { Component } from "react";
import { fbDatabase } from "../fire";
import ProductItem from "./ProductItem";
import "../styles/productIndex.css";

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
    return (
      <div className="ProductIndex">
        {this.state.crops.map(crop =>
          <ProductItem
            key={crop.id}
            name={crop.name}
            imgURL={crop.imgURL}
            quantity={crop.quantity}
          />
        )}
      </div>
    );
  }
}
