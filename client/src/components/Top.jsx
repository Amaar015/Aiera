import React from "react";
import { FaMap } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
const Top = () => {
  return (
    <div className="main">
      <div className="top">
        <div className="box">
          <i className="icon">
            <FaMap />
          </i>
          <div className="info">
            <p>
              <span>Free Call</span> +92333-3498326
            </p>
            <span>Call Us Now 24/7 Customer Support</span>
          </div>
        </div>
        {/* box-2 */}
        <div className="box">
          <div className="icon">
            <SiMinutemailer />
          </div>
          <div className="info">
            <p>Our Location</p>
            <span>Suite 724 Hyderabad CAP 17000</span>
          </div>
        </div>
        {/* box-3 */}
        <div className="box">
          <div className="icon">
            <FaConnectdevelop />
          </div>
          <div className="info">
            <p>
              <span>Connect</span> with us
            </p>
            <span>Call Us Now 24/7 Customer Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
