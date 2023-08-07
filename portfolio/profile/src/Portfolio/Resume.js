import React from "react";
import Navbar from "../navbar/Navbar";
import HeroImage from "../heroimage/HeroImage";
import Footer from "../footer/Footer";
import ResumePro from "./ResumePro";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <HeroImage name="Portfolio" text="This is my resume" />
      <ResumePro />
      <Footer />
    </div>
  );
};

export default Resume;
