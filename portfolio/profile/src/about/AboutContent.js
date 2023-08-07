import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="lefty">
        <h1>My Introduction</h1>
        <p>
          Hey I'am a react front-end developer. I have created this responsive
          portfoli0 web-page using ReactJs
        </p>
        <Link to="/contact-me">
          <button className="btn-tb">contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="card-container">
          <div className="top-img">
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
