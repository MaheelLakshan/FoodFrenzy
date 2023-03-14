import React from 'react';
import './DashBoard.css';
import { FaSearch } from 'react-icons/fa';

function DashBoard({ content: ContentComponent, HeaderName }) {
  const SearchClick = () => {};

  return (
    <div className="DashBoard">
      <div className="menuBar">
        <div className="PlaceOrder">{HeaderName}</div>
        <div className="SearchBar">
          <input
            type="text"
            placeholder="Search items"
            styles="max-width: 100%;border-radius: 5px;"
          ></input>
          <div onClick={SearchClick}>
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="DashBoardGlassBackGround">
        <div className="DashBoardGlass">
          <ContentComponent />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
