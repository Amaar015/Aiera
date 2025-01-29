import React, { useState } from "react";
import about_1 from "./../../images/lampt.jpg";
import about_2 from "./../../images/house-1.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="categoreis about">
        <div className="about-main">
          <div className="about-image">
            <img src={about_1} alt="" />
          </div>
          <div className="about-detail">
            <div className="heading">
              <span>About Us</span>
              <h1>Oakberry A Real Estate Company</h1>
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
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default About;
