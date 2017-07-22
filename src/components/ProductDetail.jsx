import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    return(
      <div className="product-detail">
        <div className="container">
          <div className="row product-detail-top">

            <div className="col-md-6">
              <div className="product-detail-image">
                <img src="http://via.placeholder.com/350x350" alt="" className="img-responsive"/>
              </div>
            </div>

            <div className="col-md-6">
              <div className="product-detail-summary">
                <h1 className="pd-title">Product Name</h1>
                <p className="pd-price">$1.00</p>
                <form className="form-inline">
                  <div className="form-group">
                    <label>Quantity:</label>
                    <input type="number" className="form-control" />
                  </div>
                </form>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
};
