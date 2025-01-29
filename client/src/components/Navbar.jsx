import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import logo from "./../images/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth <= 900 && window.innerWidth > 900) {
        setIsActive(false);
      } else {
        setIsActive(!isActive);
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Set initial value based on screen size
    handleResize();

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={isActive ? "mobile-responsive" : "nav-list"}>
        <li>
          <Link className="link" to="/" onClick={() => setIsActive(true)}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/" onClick={() => setIsActive(true)}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/" onClick={() => setIsActive(true)}>
            Properties
          </Link>
        </li>
        <li>
          <Link className="link" to="/" onClick={() => setIsActive(true)}>
            Agents
          </Link>
        </li>
        <li>
          <Link className="link" to="/" onClick={() => setIsActive(true)}>
            Blog
          </Link>
        </li>
        <li>
          <Link className="link" to="/" onClick={() => setIsActive(true)}>
            Contact
          </Link>
        </li>
      </ul>
      <button className={isActive ? "mobile-btn" : "nav-btn"}>
        SUBMIT A PROPERTY
      </button>
      {isActive ? (
        <MdOutlineClose
          className="menu-btn"
          onClick={() => setIsActive(!isActive)}
        />
      ) : (
        <MdOutlineMenu
          className="menu-btn"
          onClick={() => setIsActive(!isActive)}
        />
      )}
    </div>
  );
};

export default Navbar;
