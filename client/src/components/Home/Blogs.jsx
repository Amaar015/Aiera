import React from "react";
import { blogs } from "../../data";
import { motion } from "framer-motion";
const firstFourItems = blogs.slice(0, 4);

const Blogs = () => {
  return (
    <div className="categoreis h-blogs">
      <motion.span
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Our Blog
      </motion.span>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Recent Blog
      </motion.h2>
      <motion.div 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      className="h-blog-main">
        {firstFourItems.map((blog) => (
          <div className="main-blog-cards">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-cards-details">
              <div className="blog-created">
                <p>{blog.created_by}</p>
                <p>{blog.data}</p>
                <span>2 Comments</span>
              </div>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blogs;
