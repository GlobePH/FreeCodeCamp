<<<<<<< HEAD
import React, { Component } from "react";
import { fbDatabase } from "../fire";
import ProductItem from "./ProductItem";
import "../styles/productIndex.css";
=======
import React, { Component } from 'react'
import { fbDatabase } from '../fire'
import ProductItem from './ProductItem'
>>>>>>> react-redux-firebase

export default class ProductIndex extends Component {
  state = {
    crops: []
  }

  componentWillMount () {
    fbDatabase.ref('crops').on('value', snap => {
      console.log(snap.val())
      this.setState({crops: snap.val()})
      return false
    })
  }

  render () {
    return (
      <div className="ProductIndex">
<<<<<<< HEAD
        {this.state.crops.map(crop =>
          <ProductItem
            key={crop.id}
            name={crop.name}
            imgURL={crop.imgURL}
            quantity={crop.quantity}
          />
        )}
=======
        <div className="container">
          <div className="row">
            {this.state.crops.map(crop =>
              <ProductItem key={crop.id} name={crop.name} imgURL={crop.imgURL}/>
            )}
          </div>
        </div>

>>>>>>> react-redux-firebase
      </div>
    )
  }
}
