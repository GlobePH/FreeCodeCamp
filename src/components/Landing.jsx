import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
const Landing = () => {
  return (
    <div className="page-Landing">
      <div className="home-banner container-fluid">
        <div className="home-banner-content text-center">
          <h1>We sell the biggest, baddest veggies.</h1>
          <div className="text-content" style={{ margin: "auto" }}>
            <p>
              Halina at subukan mo. Mas malaki pa sa talong ng boyfriend mo.
            </p>
          </div>

          <Link className="btn btn-primary shop-link" to="/crops">
            Shop Now
            <span className="fa fa-chevron-right" />
          </Link>
        </div>
      </div>

      <div className="main-content">
        <div className="container text-center">
          <h2>State what we are trying to solve here</h2>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
