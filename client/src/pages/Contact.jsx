import React from "react";
import Navbar from "../components/Navbar";
import { MdKeyboardArrowRight } from "react-icons/md";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div className="page-main abouts">
        <Navbar />
        <div className="about-us">
          <p>
            Home
            <MdKeyboardArrowRight className="i" /> Contact
            <MdKeyboardArrowRight className="i" />
          </p>
          <h4>Contact us</h4>
        </div>
      </div>
      <div className="contact-us">
        <div className="contact-main">
          <div className="contact-box">
            <h2 className="contact-heading">Contact us</h2>
            <p>We're open for any suggestion or just to have a chat</p>
            <div className="contact-address">
              <div>
                <h5>Address:</h5>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div>
                <h5>Email:</h5>
                <p style={{ color: "#222", textTransform: "lowercase" }}>
                  info@yoursite.com
                </p>
              </div>
              <div>
                <h5>Phone:</h5>
                <p style={{ color: "#222" }}>+92 304 3042579</p>
              </div>
            </div>
            <form className="contact-form">
              <input
                type="text"
                name="name"
                className="inputs"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                className="inputs"
                placeholder="Email"
              />
              <input
                type="text"
                name="subject"
                className="inputs"
                placeholder="Subject"
              />
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Create a message here"
                className="inputs"
              ></textarea>
              <Buttons
                title={"SEND MESSAGE"}
                paddings={"0.6rem 1.2rem"}
                fontSizes={"14px"}
                background={"#5ea51d"}
                colors={"#fff"}
                widths={"150px"}
              />
            </form>
            <div className="follow-us">
              <h4>Follow us here</h4>
              <div className="follow-links">
                <Link className="links">Facebook</Link>
                <Link className="links">Twitter</Link>
                <Link className="links">Instagram</Link>
                <Link className="links">LinkedIn</Link>
              </div>
            </div>
          </div>

          <div className="contact-box">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.966873096902!2d-74.00594118459386!3d40.71277597933027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3161f5a3e7%3A0x4d3e1e3c5a1f6e76!2s198%20West%2021th%20Street%2C%20Suite%20721%2C%20New%20York%2C%20NY%2010016%2C%20USA!5e0!3m2!1sen!2s!4v1618355084474!5m2!1sen!2s"
              
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
