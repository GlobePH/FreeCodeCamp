import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
const Landing = () => {
  return (
    <div className="page-Landing">
      <div className="home-banner container-fluid">
        <div className="home-banner-content text-center">
          <h1>Tag Line Header here please.</h1>
          <Link className="btn btn-primary shop-link" to="/crops">Shop Now</Link>
        </div>  
      </div>
    </div>
  );
};


export default Landing;
