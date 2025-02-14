import React from "react";
import { house } from "./../../data.js";
import { MdLocationOn } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { motion } from "framer-motion";
const Featured = () => {
  const firstFourItems = house.slice(0, 4);
  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 20, scale: 0.8, rotate: -5 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <div className="categoreis featured">
      <motion.span
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Our Properties
      </motion.span>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Featured Properties
      </motion.h2>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={cardVariants}
        className="featured-main"
      >
        {firstFourItems.map((item) => (
          <motion.div
            variants={childVariants}
            whileTap={{ scale: 0.95 }}
            className="featured-box"
          >
            <div className="featured-image">
              <img src={item.property_img} alt="" />
              <span className="price">{item.amount}</span>
            </div>
            <div className="detail">
              <div className="agent">
                <div>
                  <img src={item.image} alt="" />
                  <p>{item.agent_name}</p>
                </div>
                <p>2 weeks ago</p>
              </div>
              <div className="property-detail">
                <h4>{item.name}</h4>
                <div>
                  <div className="location">
                    <MdLocationOn className="icons" />
                    <p>{item.location}</p>
                  </div>
                  <button className={item.type}>{item.type}</button>
                </div>
              </div>
              <div className="rooms">
                <div className="location">
                  <IoBedOutline className="icons" />
                  <p>{item.rooms}</p>
                </div>
                <div className="location">
                  <MdOutlineBathtub className="icons" />
                  <p>{item.washroom}</p>
                </div>
                <div className="location">
                  <MdLocationOn className="icons" />
                  <p>{item.sqft}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Featured;
