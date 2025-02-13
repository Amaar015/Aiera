import React from "react";
import Navbar from "../components/Navbar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { agents } from "../data";
import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa6";

const Agent = () => {
  return (
    <>
      <div className="page-main abouts">
        <Navbar />
        <div className="about-us">
          <p>
            Home
            <MdKeyboardArrowRight className="i" /> Our Agents
            <MdKeyboardArrowRight className="i" />
          </p>
          <h4>Our Agents</h4>
        </div>
      </div>
      <div className="Agent-main">
        {agents.map((agent) => (
          <div className="agent-card">
            <img src={agent.image} alt="" />
            <div className="agent-detail">
              <div className="listing">
                <p>Listing</p>
                <p>10 Properties</p>
              </div>
              <h3>{agent.name}</h3>
              <div className="social">
                <i>
                  <FaTwitter className="icon" />
                </i>
                <i>
                  <FaFacebookF className="icon" />
                </i>
                <i>
                  <FaGoogle className="icon" />
                </i>
                <i>
                  <FaInstagram className="icon" />
                </i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Agent;
