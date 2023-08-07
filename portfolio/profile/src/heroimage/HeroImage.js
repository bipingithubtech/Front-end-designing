import React from "react";
import "./Heroima.css";

const HeroImage = (props) => {
  return (
    <div className="head-img">
      <div className="heading">
        <h1>{props.name}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default HeroImage;
