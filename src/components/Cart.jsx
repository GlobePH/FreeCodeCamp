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
              <p>{crops[id].name}</p>
              <p>{crops[id].quantity}</p>
            </div>
          )
        )
    return (
      <div>{cropsList}</div>
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
)(Cart)
