import React from "react";
import "./header.css";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ category, categories, setCategory }) => {
  return (
    <>
      <h1>STAR WARS DATA</h1>
      {!category ? (
        <p>
          Make your selection and <span>may the force be with you!</span>
        </p>
      ) : (
        <div className="header-nav-search">
          <Nav categories={categories} setCategory={setCategory} />
          <SearchBar />
        </div>
      )}
    </>
  );
};

export default Header;
