import React from "react";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import Searchbar from "../components/Searchbar";
import Categories from "../components/Home/Categories";
import Featured from "../components/Home/Featured";
import Video from "../components/Home/Video";
import About from "../components/Home/About";
import GetTouch from "../components/Home/GetTouch";
import Testonomial from "../components/Home/Testonomial";
import Agents from "../components/Home/Agents";
import Blogs from "../components/Home/Blogs";
import FooterTop from "../components/Home/FooterTop";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div className="page-main">
        <Navbar />
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text"
        >
          <h1>
            Let Your Home Be <br /> <span>Unique & Stylist</span>{" "}
          </h1>
          <p>
            A small river named Duden flows by their place and suplies it with
            the necessary regelialia. It is a paradisematic country , in which
            roasted parts of sentences fly into your mouth.
          </p>
          <Buttons
            title={"Learn More"}
            icon={<FaArrowRightLong />}
            paddings={"1rem 1.4rem"}
            fontSizes={"16px"}
            background={"#5ea51d"}
            colors={"#ffffcc"}
          />
          <div className="buttons">
            <Buttons
              title={"Buy Properties"}
              paddings={"1rem 1.4rem"}
              fontSizes={"16px"}
              background={"#f7f7f7"}
              colors={"#000000cc"}
              fontWeight={"bold"}
            />
            <Buttons
              title={"Rent Properties"}
              paddings={"1rem 1.4rem"}
              fontSizes={"16px"}
              background={"#5ea51d"}
              colors={"#ffffcc"}
              fontWeight={"bold"}
            />
          </div>
        </motion.div>
        <Searchbar />
      </div>
      <Categories />
      <Featured />
      <Video />
      <About />
      <GetTouch />
      <Testonomial />
      <Agents />
      <Blogs />
      <FooterTop />
    </>
  );
};

export default Home;
