import React from "react";
import { LiaLandmarkSolid } from "react-icons/lia";
import { PiFactory } from "react-icons/pi";
import { ImHome } from "react-icons/im";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
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
  return (
    <div className="categoreis">
      <span>Aiera</span>
      <h2>Explore Our Categories & Places</h2>
      <div className="categories-main">
        <div className="categories-box">
          <LiaLandmarkSolid className="categories-icons" />
          <h4>Land</h4>
        </div>
        <div className="categories-box">
          <ImHome className="categories-icons" />
          <h4>Residential</h4>
        </div>
        <div className="categories-box">
          <HiOutlineBuildingOffice className="categories-icons" />
          <h4>Commercial</h4>
        </div>
        <div className="categories-box">
          <PiFactory className="categories-icons" />
          <h4>Industrial</h4>
        </div>
      </div>
      <div className="category">
        {category.map((data) => (
          <div className="category-box">
            <h5>{data.place}</h5>
            <span className="property">{data.properties}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
