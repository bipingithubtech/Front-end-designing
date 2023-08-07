import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import HeroImage from "../heroimage/HeroImage";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage name="About" text="Iam a Front-End developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
