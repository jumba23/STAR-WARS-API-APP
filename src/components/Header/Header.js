import React from "react";
import "./header.css";
import Links from "../Nav/Nav";

const Header = ({ category }) => {
  return (
    <>
      <h1>STAR WARS DATA</h1>
      {!category ? (
        <p>
          Make your selection and <span>may the force be with you!</span>
        </p>
      ) : (
        <Links />
      )}
    </>
  );
};

export default Header;
