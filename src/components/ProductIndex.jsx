import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  dataToJS
} from 'react-redux-firebase'

import ProductItem from './ProductItem'
import Cart from './Cart'
import '../styles/productIndex.css'

class ProductIndex extends Component {
  render () {
    const {crops} = this.props

    const cropsList = !isLoaded(crops)
      ? 'Loading'
      : isEmpty(crops)
        ? 'Crops list empty'
        : Object.keys(crops).map((key, id) => (
          <ProductItem
            key={crops[id].id}
            name={crops[id].name}
            imgURL={crops[id].imgURL}
            quantity={crops[id].quantity}
          />
        ))
    return (
      <div className="ProductIndex">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="row">
                {cropsList}
              </div>
            </div>
            <div className="col-sm-3">
              <Cart/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default compose(
  firebaseConnect([
    'crops'
  ]),
  connect(
    ({firebase}) => ({
      crops: dataToJS(firebase, 'crops'),
    })
  )
)(ProductIndex)
