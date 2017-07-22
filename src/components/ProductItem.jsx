import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import ProductDetail from './ProductDetail'

<<<<<<< HEAD
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
=======
const ProductItem = (props) => {
  const {name, imgURL, quantity} = props
  return (
    <div className="product-item col-md-4 text-center">
      <Link className="product-content" to={`/crops/${name}`}>
        <div className="thumbnail product-thumbnail"
             style={{backgroundImage: `url(${imgURL})`}}
        >
        </div>
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
      <Route path={`/crops/${name}`} component={props => <ProductDetail {...props}/>}/>
    </div>
  )
>>>>>>> fixing Product Components
}

export default ProductItem;
