import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
const Landing = () => {
  return (
    <div className="page-Landing">
      <div className="home-banner container-fluid">
        <div className="home-banner-content text-center">
          <h1>Protect our farmers, protect our future</h1>
          <div className="text-content" style={{ margin: "auto" }}>
            <p>
              Eat the freshest, greenest, and healthiest crops our Filipino
              farmers have to offer
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
          <h2>Our farmers need help</h2>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <p>
                Our farmers work hard so we can have food on the table. It's our
                turn to help them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="helping-communities text-center">
        <div className="container">
          <h2>Our number one metric</h2>
          <em className="quote">
            To increase each Filipino's quality of living
          </em>
        </div>
      </div>

      <div className="meet-the-team text-center">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 developer">
              <div
                className="dev-thumb"
                style={{
                  backgroundImage:
                    "url(https://avatars0.githubusercontent.com/u/11132381?v=4&u=cc9d5b1e9bab9689fa3e9c1f2256536c4efa122c&s=400)",
                  backgroundSize: "150%"
                }}
              />
              <h4>
                <strong>Joselie Castañeda</strong>
              </h4>
              <p className="position">
                <i>Benevolent Overlord</i>
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
              <div
                className="dev-thumb"
                style={{
                  backgroundImage:
                    "url(https://pbs.twimg.com/profile_images/826926990556962818/k0xej8wf_400x400.jpg)"
                }}
              />
              <h4>
                <strong>Philip Balbas</strong>
              </h4>
              <p className="position">
                <i>Reichsmarschall</i>
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
