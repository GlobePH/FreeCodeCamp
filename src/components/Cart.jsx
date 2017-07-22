import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
  render () {
    const {cart} = this.props
    let cropsItem

    if (cart) {
      cropsItem = cart.map(item => (
        <div>
          <h2>{item}</h2>
          <p>{item.quantity}</p>
        </div>
      ))
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

