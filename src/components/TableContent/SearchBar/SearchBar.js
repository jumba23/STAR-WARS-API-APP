import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./SearchBar.module.css";

const SearchBar = ({search}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => setSearchTerm(e.target.value);

  const handleClick = () => {
    search(`?search=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div className={classes.SearchArea}>
      <Form.Control
        classes={classes.SearchInput}
        type="text"
        placeholder="Search here..."
        value={searchTerm}
        onChange={handleChange}
        autoFocus
      />
      <Button
        variant="secondary"
        className={classes.Button}
        onClick={handleClick}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
