import React from "react";
import { house } from "./../../data.js";
import { MdLocationOn } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
const Featured = () => {
  return (
    <div className="categoreis featured">
      <span>Aiera</span>
      <h2>Explore Our Categories & Places</h2>
      <div className="featured-main">
        {house.map((item) => (
          <div className="featured-box">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
