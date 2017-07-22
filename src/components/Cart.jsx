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
    const {crops} = this.props

    const cropsList = !isLoaded(crops)
      ? 'Loading'
      : isEmpty(crops)
        ? 'Todo list is empty'
        : Object.keys(crops).map((key, id) => (
            <div>
              <p>===================</p>
              <h1>Crop: {crops[id].name}</h1>
              <p>Quantity: {crops[id].quantity}</p>
              <p>====================</p>
            </div>
          )
        )
    return (
      <div>
        {cropsList}

      </div>
    )
  }
}

export default compose(
  firebaseConnect(['crops']),
  connect(({firebase}) => ({crops: dataToJS(firebase, 'crops'),}))
)(Cart)
