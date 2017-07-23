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

      <div className="helping-communities text-center">
        <div className="container">
          <h2>Helping Filipino Farmers</h2>
          <em className="quote">
            "Thanks to Farmbase, my son is now studying Medicine in Harvard"
          </em>
        </div>
      </div>

      <div className="meet-the-team text-center">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 developer">
              <div className="dev-thumb" />
              <h4>
                <strong>Developer Name</strong>
              </h4>
              <p className="position">
                <i>position</i>
              </p>
            </div>
            <div className="col-md-3 col-sm-6 developer">
              <div
                className="dev-thumb"
                style={{
                  backgroundImage:
                    "url(https://avatars0.githubusercontent.com/u/17956698?v=4&u=a87a14de89d859d4cb2831bdb28c944f6d47dcaa&s=400)",
                  backgroundSize: "150%",
                  backgroundPosition: "bottom center"
                }}
              />
              <h4>
                <strong>John Salcedo</strong>
              </h4>
              <p className="position">
                <i>Team Mascot</i>
              </p>
            </div>
            <div className="col-md-3 col-sm-6 developer">
              <div className="dev-thumb" />
              <h4>
                <strong>Developer Name</strong>
              </h4>
              <p className="position">
                <i>position</i>
              </p>
            </div>
            <div className="col-md-3 col-sm-6 developer">
              <div
                className="dev-thumb"
                style={{
                  backgroundImage:
                    "url(https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA2OAAAAJDBkMTJkNmUzLWNlNjUtNGU2My1hMGZlLWUzYTAxOGI5OTUwZA.jpg)"
                }}
              />
              <h4>
                <strong>Paul Simon Ongpin</strong>
              </h4>
              <p className="position text-muted">
                <i>Frontend Web Developer</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
