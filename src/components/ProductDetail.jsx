import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  dataToJS
} from "react-redux-firebase";
import _ from "lodash";
class ProductDetail extends Component {
  render() {
    let cropIndex;
    if (!this.props.crops) {
      return <span>Loading...</span>;
    } else {
      cropIndex = _.findIndex(
        this.props.crops,
        o => o.name === this.props.match.params.id
      );
    }
    return (
      <div className="product-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-5">
                  <div className="product-detail-image">
                    <img
                      src={this.props.crops[cropIndex].imgURL}
                      alt={this.props.crops[cropIndex].name}
                      className="img-responsive"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-7">
                <div className="product-detail-summary">
                  <h1 className="pd-title">
                    {this.props.crops[cropIndex].name}
                  </h1>
                  <p className="pd-price">
                    ₱{Math.round(
                      1 / this.props.crops[cropIndex].quantity * 500 * 100
                    ) / 100}{" "}
                    bawat nguya
                  </p>
                  <form className="form-inline">
                    <div className="form-group">
                      <label>Quantity:</label>
                      <input type="number" className="form-control" />
                    </div>
                  </form>
                  <form>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Add to Cart"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">Add cart here...</div>
        </div>
      </div>
    );
  }
}

export default compose(
  firebaseConnect(["crops"]),
  connect(({ firebase }) => ({
    crops: dataToJS(firebase, "crops")
  }))
)(ProductDetail);
