import React from "react";
import Navbar from "../components/Navbar";
import { MdKeyboardArrowRight } from "react-icons/md";
import About from "../components/Home/About";
import Video from "../components/Home/Video";
import GetTouch from "../components/Home/GetTouch";
import Testimonial from "../components/Home/Testonomial";
import FooterTop from "../components/Home/FooterTop";
const AboutUs = () => {
  return (
    <>
      <div className="page-main abouts">
        <Navbar />
        <div className="about-us">
          <p>
            Home
            <MdKeyboardArrowRight className="i" /> About us
            <MdKeyboardArrowRight className="i" />
          </p>
          <h4>About Us</h4>
        </div>
      </div>
      <About />
      <Video />
      <GetTouch />
      <Testimonial />
      <FooterTop />
    </>
  );
};

export default AboutUs;
