import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    return(
      <div className="product-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-5">
                  <div className="product-detail-image">
                    <img src="http://via.placeholder.com/350x350" alt="" className="img-responsive"/>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="product-detail-summary">
                    <h1 className="pd-title">Product Name</h1>
                    <p className="pd-price">$1.00</p>
                    <form className="form-inline">
                      <div className="form-group">
                        <label>Quantity:</label>
                        <input type="number" className="form-control" />
                      </div>
                    </form>
                    <form>
                      <input type="submit" className="btn btn-primary" value="Add to Cart"/>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              Add cart here...
            </div>

          </div>
        </div>
      </div>
    );
  }
};
