import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "./../images/logo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-main-top">
          <div className="footer-detail">
            <img src={logo} alt="" />
            <div className="text-detail">
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <div className="footer-icons">
                <i>
                  <FaTwitter />
                </i>
                <i>
                  <FaFacebookF />
                </i>
                <i>
                  <FaInstagram />
                </i>
              </div>
            </div>
          </div>

          <div className="footer-detail">
            <h4>Offers</h4>
            <div className="footer-links">
              <div>
                <MdKeyboardArrowRight className="i" />
                <Link to="/" className="a">
                  Properties
                </Link>
              </div>
              <div>
                <MdKeyboardArrowRight className="i" />
                <Link to="/" className="a">
                  Agents
                </Link>
              </div>
              <div>
                <MdKeyboardArrowRight className="i" />
                <Link to="/" className="a">
                  Locations
                </Link>
              </div>
              <div>
                <MdKeyboardArrowRight className="i" />
                <Link to="/" className="a">
                  Clients Support
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-detail">
            <h4>Company</h4>
            <div className="footer-links">
              <div>
                <MdKeyboardArrowRight className="i" />
                <Link to="/" className="a">
                  Home
                </Link>
              </div>
              <div>
                <MdKeyboardArrowRight className="i" />
                <Link to="/" className="a">
                  About
                </Link>
              </div>
              <div>
                <MdKeyboardArrowRight className="i" />
                <Link to="/" className="a">
                  Blogs
                </Link>
              </div>
              <div>
                <MdKeyboardArrowRight className="i" />
                <Link to="/" className="a">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-detail">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <div>
                <MdKeyboardArrowRight className="i" />
                <Link to="/" className="a">
                  Terms & Conditions
                </Link>
              </div>
              <div>
                <MdKeyboardArrowRight className="i" />
                <Link to="/" className="a">
                  User's Guide
                </Link>
              </div>
              <div>
                <MdKeyboardArrowRight className="i" />
                <Link to="/" className="a">
                  Support Center
                </Link>
              </div>
              <div>
                <MdKeyboardArrowRight className="i" />
                <Link to="/" className="a">
                  Press Info
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-detail">
            <h4>Have a Question ?</h4>
            <div className="footer-contact">
              <div>
                <MdLocationPin className="iii" />
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
              <div>
                <FaPhoneAlt className="ii" />
                <p>+2 392 3929 210</p>
              </div>
              <div>
                <SiMinutemailer className="ii" />
                <p>info@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-main-bottom">
          <p>
            Copyright ©2025 All rights reserved | This template is made with{" "}
            <FaHeart /> by Colorlib
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
