import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
const Landing = () => {
  return (
    <div className="page-Landing">
      <div className="home-banner container-fluid">
        <div className="home-banner-content text-center">
          <h1>Tag Line Header here please.</h1>
          <div className="text-content">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</p>
          </div>
          
          <Link className="btn btn-primary shop-link" to="/crops">Shop Now 
            <span className="fa fa-chevron-right"></span>
          </Link>
        </div>  
      </div>

      <div className="main-content">
        <div className="container text-center">
          <div className="row">
            <h2>State what we are trying to solve here</h2>
            <div className="col-md-8 col-md-offset-2">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa. 
                Cum sociis natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
                pretium quis, sem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{minHeight: '700px'}}/>
    </div>
  );
};


export default Landing;
