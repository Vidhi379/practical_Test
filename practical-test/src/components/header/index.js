import React from "react";
import "./styles.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        discussi
        <span className="square" />n b<span className="square" />x
      </div>
      <div className="spotlight-experience">
        <p>The Spotlight Experience</p>
      </div>
      <div className="profile-menu">
        <button className="profile-btn">
          {" "}
          <i class="fa fa-user-o" aria-hidden="true" />
          Lisa-Marie Carter
        </button>
        <div className="menu">
          <i class="fa fa-bars" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default Header;
