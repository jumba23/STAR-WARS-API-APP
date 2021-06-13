import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const handleQueryText = (e) => {
    setEnteredText(e.target.value);
  };

  const handleSearchButton = () => {
    props.getSearchQuery(`?search=${enteredText}`);
    setEnteredText("");
  };

  return (
    <div className={classes.SearchArea}>
      <Form.Control
        classes={classes.SearchInput}
        type="text"
        placeholder="Search here..."
        value={enteredText}
        onChange={handleQueryText}
        autoFocus
      />
      <Button
        variant="secondary"
        className={classes.Button}
        onClick={handleSearchButton}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
