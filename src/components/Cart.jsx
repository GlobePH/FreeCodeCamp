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

    console.log(this.props)
    const cropsList = !isLoaded(crops)
      ? 'Loading'
      : isEmpty(crops``)
        ? 'Todo list is empty'
        : Object.keys(crops).map((key, id) => (
            <p>crop</p>
          )
        )
    return (
      <div>
        <h1>{this.props.crops}</h1>
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
)(Cart)
