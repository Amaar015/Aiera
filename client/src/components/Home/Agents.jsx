import React from "react";
import { agents } from "../../data";
import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa6";

const Agents = () => {
  return (
    <div className="agents">
      <div className="agent-heading">
        <span>Meet our Agents</span>
        <h1>Our Agents</h1>
      </div>
      <div className="agents-main">
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
    </div>
  );
};

export default Agents;
