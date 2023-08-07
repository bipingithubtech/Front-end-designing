import "../Hero.css";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="mask">
        <div className="hero">
          <img
            className="into-img"
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="img"
          />
        </div>
        <div className="content  ">
          <p>HI, I'M BIPIN</p>
          <h1>React Developer </h1>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
