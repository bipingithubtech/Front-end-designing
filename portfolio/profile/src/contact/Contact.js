import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import HeroImage from "../heroimage/HeroImage";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage name="Contact" text="Please fill your Details" />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
