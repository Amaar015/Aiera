import React from "react";
import { LiaLandmarkSolid } from "react-icons/lia";
import { PiFactory } from "react-icons/pi";
import { ImHome } from "react-icons/im";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { motion } from "framer-motion";
const Categories = () => {
  const category = [
    {
      id: 1,
      place: "New York",
      properties: "200 Properties",
    },
    {
      id: 2,
      place: "California",
      properties: "100 Properties",
    },
    {
      id: 3,
      place: "Florida",
      properties: "422 Properties",
    },
    {
      id: 4,
      place: "London",
      properties: "100 Properties",
    },
    {
      id: 5,
      place: "Tennesse",
      properties: "200 Properties",
    },
    {
      id: 6,
      place: "Charloote",
      properties: "200 Properties",
    },
    {
      id: 7,
      place: "New York",
      properties: "200 Properties",
    },
    {
      id: 8,
      place: "California",
      properties: "100 Properties",
    },
    {
      id: 9,
      place: "Florida",
      properties: "422 Properties",
    },
    {
      id: 10,
      place: "London",
      properties: "100 Properties",
    },
    {
      id: 11,
      place: "Tennesse",
      properties: "200 Properties",
    },
    {
      id: 12,
      place: "Charloote",
      properties: "200 Properties",
    },
  ];
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
    <div className="categoreis">
      <motion.span
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Aiera
      </motion.span>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Explore Our Categories & Places
      </motion.h2>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={cardVariants}
        className="categories-main"
      >
        <motion.div
          variants={childVariants}
          whileTap={{ scale: 0.95 }}
          className="categories-box"
        >
          <LiaLandmarkSolid className="categories-icons" />
          <h4>Land</h4>
        </motion.div>

        <motion.div
          variants={childVariants}
          whileTap={{ scale: 0.95 }}
          className="categories-box"
        >
          <ImHome className="categories-icons" />
          <h4>Residential</h4>
        </motion.div>

        <motion.div
          variants={childVariants}
          whileTap={{ scale: 0.95 }}
          className="categories-box"
        >
          <HiOutlineBuildingOffice className="categories-icons" />
          <h4>Commercial</h4>
        </motion.div>

        <motion.div
          variants={childVariants}
          whileTap={{ scale: 0.9 }}
          className="categories-box"
        >
          <PiFactory className="categories-icons" />
          <h4>Industrial</h4>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="category"
      >
        {category.map((data) => (
          <div className="category-box">
            <h5>{data.place}</h5>
            <span className="property">{data.properties}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Categories;
