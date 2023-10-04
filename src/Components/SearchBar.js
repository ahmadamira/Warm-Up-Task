import React from "react";
import "./SearchBar.css";
import "font-awesome/css/font-awesome.min.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <i className="fa fa-search" />{" "}
      <input type="text" placeholder="Find members" />
    </div>
  );
};

export default SearchBar;
