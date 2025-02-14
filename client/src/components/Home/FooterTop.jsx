import React from "react";
import { FaSearch } from "react-icons/fa";
import {motion} from 'framer-motion'
const FooterTop = () => {
  return (
    <motion.div 
    initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
    className="footer-top">
      <div className="footer-top-image">
        <img
          src="https://images.pexels.com/photos/5570226/pexels-photo-5570226.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <i>
        <FaSearch/>
        </i>  
      </div>
      <div className="footer-top-image">
        <img
          src="https://images.pexels.com/photos/6373660/pexels-photo-6373660.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <i>
        <FaSearch/>
        </i>
      </div>
      <div className="footer-top-image">
        <img
          src="https://images.pexels.com/photos/7415127/pexels-photo-7415127.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <i>
        <FaSearch/>
        </i>
      </div>
      <div className="footer-top-image">
        <img
          src="https://images.pexels.com/photos/3773570/pexels-photo-3773570.png?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <i>
        <FaSearch/>
        </i>
      </div>
      <div className="footer-top-image">
        <img
          src="https://images.pexels.com/photos/1543447/pexels-photo-1543447.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <i>
        <FaSearch/>
        </i>
      </div>
      <div className="footer-top-image">
        <img
          src="https://images.pexels.com/photos/4064639/pexels-photo-4064639.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <i>
        <FaSearch/>
        </i>
      </div>
    </motion.div>
  );
};

export default FooterTop;
