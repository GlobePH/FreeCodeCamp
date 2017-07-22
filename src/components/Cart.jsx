import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  dataToJS
} from 'react-redux-firebase'

class Cart extends Component {
  render () {
    const {cart} = this.props

    let cropsItem

    if (cart) {
      cropsItem = (
        <div>
          <h2>cart</h2>
        </div>
      )
    } else {
      cropsItem = <p>Add a Crop to Cart</p>
    }

    return (
      <div>
        {cropsItem}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(Cart)

