import "./Footer.css";
import React from "react";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Haldwani,nainital Uttrakhand</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              7668793290
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              bipinjoshicr712@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <p>This is my profile</p>
          <p> here i have used html,css,javascript and react Js</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
