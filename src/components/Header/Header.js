import React from "react";
import "./header.css";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ category }) => {
  return (
    <>
      <h1>STAR WARS DATA</h1>
      {!category ? (
        <p>
          Make your selection and <span>may the force be with you!</span>
        </p>
      ) : (
        <div className="header-nav-search">
          <Nav />
          <SearchBar />
        </div>
      )}
    </>
  );
};

export default Header;
