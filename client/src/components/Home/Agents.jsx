import React from "react";
import { agents } from "../../data";
import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

const firstFourItems = agents.slice(0, 4);

const Agents = () => {
  return (
    <div className="agents">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="agent-heading"
      >
        <span>Meet our Agents</span>
        <h1>Our Agents</h1>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="agents-main"
      >
        {firstFourItems.map((agent) => (
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
      </motion.div>
    </div>
  );
};

export default Agents;
