import React from "react";
import "./styles.css";
import socialMediaImg from "./images/social-media-img.png";
import spotlightLogo from "./images/spotlight-logo.png";

const Banner = () => {
  return (
    <div className="banner-bg">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 className="banner-title">
              GIVING{" "}
              <span className="multicolor-text" data-text="GLOBAL BRANDS">
                GLOBAL BRANDS
              </span>{" "}
              A SEAT AT THE TABLE
            </h2>
            <img className="mb-4" src={socialMediaImg} alt="connect with us" />
          </div>
          <div className="col-7">
            <div className="spotlight-logo">
              <div class="line-above" />
              <img src={spotlightLogo} alt="spotlight experience" />
              <button className='learn-more-btn'>Learn More</button>
              <div class="line-below" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
