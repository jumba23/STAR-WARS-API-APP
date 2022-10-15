import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSearchTerm } from "../Helper/fetchAPI";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const { pathname } = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const fetchSearchTerm = async () => {
    console.log(pathname);
    console.log(category);
    console.log(searchTerm);
    await getSearchTerm(searchTerm, category)
      .then((returnedSearchTerm) => {
        console.log("returnedSearchTerm", returnedSearchTerm);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    setCategory(pathname.split("/")[1]);
    fetchSearchTerm();
  }, [pathname]);

  const handleChange = (e) => setSearchTerm(e.target.value);

  const handleClick = () => {
    console.log(searchTerm);
    fetchSearchTerm();
    setSearchTerm("");
  };

  return (
    <div className={classes.SearchArea}>
      <Form.Control
        className={classes.SearchInput}
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
        OK
      </Button>
    </div>
  );
};

export default SearchBar;
