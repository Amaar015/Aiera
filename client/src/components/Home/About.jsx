import React, { useState } from "react";
import about_1 from "./../../images/lampt.jpg";
import about_2 from "./../../images/house-1.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";
const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="categoreis about">
        <div className="about-main">
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="about-image"
          >
            <img src={about_1} alt="" />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="about-detail"
          >
            <div
              className="heading"
            >
              <span
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                About Us
              </span>
              <h1
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                Oakberry A Real Estate Company
              </h1>
            </div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="figures">
              <div className="figure">
                <h2>
                  {counterOn && (
                    <CountUp
                      className="number"
                      start={0}
                      end={50}
                      duration={3}
                      delay={0}
                    />
                  )}
                </h2>
                <span>Years of Experienced</span>
              </div>
              <div className="figure">
                <h2>
                  {counterOn && (
                    <CountUp
                      className="number"
                      start={0}
                      end={210}
                      duration={3}
                      delay={0}
                    />
                  )}
                  K+
                </h2>
                <span>Total Properties</span>
              </div>
              <div className="figure">
                <h2>
                  {counterOn && (
                    <CountUp
                      className="number"
                      start={200}
                      end={450}
                      duration={3}
                      delay={0}
                    />
                  )}
                </h2>
                <span>Qualified Realtors</span>
              </div>
              <div className="figure">
                <h2>
                  {counterOn && (
                    <CountUp
                      className="number"
                      start={0}
                      end={100}
                      duration={3}
                      delay={0}
                    />
                  )}
                </h2>
                <span>Total Branches</span>
              </div>
            </div>
            <div className="detail-image">
              <img src={about_2} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default About;
