import React, { Component } from "react";
import {Link, Route} from 'react-router-dom'
import ProductDetail from './ProductDetail'

class ProductItem extends Component {
  render() {
    const {name, imgURL, quantity} = this.props
    return (
      <div className="product-item col-md-4 col-sm-6 text-center">
        <Link className="product-content" to={`/crops/${name}`}>
          <div
            className="thumbnail product-thumbnail"
            style={{ backgroundImage: `url(${imgURL})` }}
          />
          <h3 className="product-title">
            {name}
          </h3>
          <p className="product-price">
            Available stock: {quantity}g
          </p>
          <p className="product-price">
            Price per gram: ₱{Math.round(1 / quantity * 500 * 100) /
              100}
          </p>
        </Link>
        <Route path={`/crops/${name}`} component={ProductDetail}/>
      </div>
    );
  }
}

export default ProductItem;
