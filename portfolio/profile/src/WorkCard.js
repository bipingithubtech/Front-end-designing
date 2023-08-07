import React from "react";
import "./Work.css";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-conatiner">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=444&q=80"
            alt="image"
          />
          <h2 className="project-title">title</h2>
          <div className="pro-details">
            <p>this is text</p>
            <div className="pro-btn">
              <NavLink className="btn">view</NavLink>
              <NavLink className="btn">source</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
