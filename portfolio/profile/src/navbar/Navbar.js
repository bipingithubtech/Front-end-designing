import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleclick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>B</span>ipin
            <span>P</span>rofile
          </h2>
        </div>
        <div className="conneting_div">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link className="avtive" to="/">
                home
              </Link>
            </li>
            <li>
              <Link to="/about-me">about</Link>
            </li>

            <li>
              <Link to="/contact-me">contact</Link>
            </li>
            <li>
              <Link to="/resume">resume</Link>
            </li>
          </ul>
        </div>
        <div className="social_div">
          <ul>
            <li>
              <i className="bi bi-facebook" id="facebook"></i>
            </li>
            <li>
              <i className="bi bi-instagram" id="instagram"></i>
            </li>
            <li>
              <i className="bi bi-linkedin" id="linkdin"></i>
            </li>
            <li></li>
          </ul>
        </div>
        <div
          className="icon"
          style={{ color: "#fa5c0c" }}
          onClick={handleclick}
        >
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
