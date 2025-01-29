import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
const Searchbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isPriceVisible, setIsPriceVisible] = useState(false);

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [itemList, setItemList] = useState([
    {
      name: "Rent",
      value: "rent",
    },
    {
      name: "Buy",
      value: "buy",
    },
    {
      name: "Sell",
      value: "sell",
    },
  ]);
  return (
    <div className="search-bar">
      {/* 1 */}
      <div className="search-box">
        <h5>ENTER KEYWORD</h5>
        <div className="inputs">
          <CiSearch className="icons" />
          <input type="text" placeholder="Enter Keyword" />
        </div>
      </div>
      {/* 2 */}
      <div className="search-box custom-dropdown">
        <h5>PROPERTY TYPE</h5>
        {/*custom drop replaed with this  */}
        <div
          className="custom-dropdown-selection"
          onClick={(e) => {
            setIsDropDownVisible(!isDropDownVisible);
          }}
        >
          {selectedItemIndex != null
            ? itemList[selectedItemIndex].name
            : "Residential"}
        </div>
        {/* drop down item */}
        {isDropDownVisible ? (
          <div className="items-holder">
            {itemList.map((item, index) => (
              <div
                key={item.value}
                className="dropdown-item"
                onClick={(e) => {
                  setSelectedItemIndex(index);
                  setIsDropDownVisible(false);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* 3 */}
      <div className="search-box">
        <h5>LOCATION</h5>
        <div className="inputs">
          <FaLocationDot className="icons" />
          <input type="text" placeholder="Location" />
        </div>
      </div>
      {/* 4 */}
      <div className="search-box custom-dropdown">
        <h5>PRICE LIMIT</h5>
        {/*custom drop replaed with this  */}
        <div
          className="custom-dropdown-selection"
          onClick={(e) => {
            setIsPriceVisible(!isPriceVisible);
          }}
        >
          {selectedItemIndex != null
            ? itemList[selectedItemIndex].name
            : "Residential"}
        </div>
        {/* drop down item */}
        {isPriceVisible ? (
          <div className="items-holder">
            {itemList.map((item, index) => (
              <div
                key={item.value}
                className="dropdown-item"
                onClick={(e) => {
                  setSelectedItemIndex(index);
                  setIsPriceVisible(false);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* 5 */}
      <div className="search-box">
        <button>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
