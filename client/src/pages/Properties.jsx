import React from "react";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";
import Searchbar from "../components/Searchbar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { house } from "../data";
import { MdLocationOn } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { usePagination } from "../hooks/pagination";
import Pagination from "@mui/material/Pagination";

const Properties = () => {
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ] = usePagination(8, house.length);
  return (
    <>
      <div className="page-main abouts">
        <Navbar />
        <div className="text">
          <div className="about-us">
            <p>
              Home
              <MdKeyboardArrowRight className="i" /> Our Blogs
              <MdKeyboardArrowRight className="i" />
            </p>
            <h4>Properties</h4>
          </div>
          <div className="buttons">
            <Buttons
              title={"Buy Properties"}
              paddings={"1rem 1.4rem"}
              fontSizes={"16px"}
              background={"#f7f7f7"}
              colors={"#000000cc"}
              fontWeight={"bold"}
            />
            <Buttons
              title={"Rent Properties"}
              paddings={"1rem 1.4rem"}
              fontSizes={"16px"}
              background={"#5ea51d"}
              colors={"#ffffcc"}
              fontWeight={"bold"}
            />
          </div>
        </div>
        <Searchbar />
      </div>
      {/* featured cards  */}
      <div className="Agent-main">
        {(() => {
          const displayPosts = [];
          for (let i = startPageIndex; i <= endPageIndex; i++) {
            displayPosts.push(
              <div className="featured-box">
                <div className="featured-image">
                  <img src={house[i].property_img} alt="" />
                  <span className="price">{house[i].amount}</span>
                </div>
                <div className="detail">
                  <div className="agent">
                    <div>
                      <img src={house[i].image} alt="" />
                      <p>{house[i].agent_name}</p>
                    </div>
                    <p>2 weeks ago</p>
                  </div>
                  <div className="property-detail">
                    <h4>{house[i].name}</h4>
                    <div>
                      <div className="location">
                        <MdLocationOn className="icons" />
                        <p>{house[i].location}</p>
                      </div>
                      <button className={house[i].type}>{house[i].type}</button>
                    </div>
                  </div>
                  <div className="rooms">
                    <div className="location">
                      <IoBedOutline className="icons" />
                      <p>{house[i].rooms}</p>
                    </div>
                    <div className="location">
                      <MdOutlineBathtub className="icons" />
                      <p>{house[i].washroom}</p>
                    </div>
                    <div className="location">
                      <MdLocationOn className="icons" />
                      <p>{house[i].sqft}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return displayPosts;
        })()}
        <Pagination
          style={{ marginTop: "2rem" }}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#5ea51d", // Text color
              borderColor: "#5ea51d", // Border color (if outlined)
            },
            "& .Mui-selected": {
              backgroundColor: "#5ea51d !important",
              color: "#fff !important",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#4d8f1a",
            },
          }}
          count={totalPages}
          onChange={(event, value) => displayPage(value)}
        />
      </div>
    </>
  );
};

export default Properties;
