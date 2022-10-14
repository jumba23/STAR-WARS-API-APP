import React, { useState, useEffect } from "react";
import "./displaydata.css";
import DisplayDetails from "../DisplayDetails/DisplayDetails";
import CategoryCards from "../CategoryCards/CategoryCards";
import { Routes, Route } from "react-router-dom";
import { getCategory } from "../Helper/getCategory";

const DisplayData = ({category}) => {

  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const fetchCategory = async () => {
    console.log(category);
    await getCategory(category)
      .then((returnedCategory) => {
        console.log(returnedCategory);
        setCategoryData(returnedCategory);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (!category) return;
    fetchCategory();
  }, [category]);

  
  return (
    <>
      <div className="search-data">
        <Routes>
          <Route path="/people"></Route>
          <Route path="/planets"></Route>
          <Route path="/films"></Route>
          <Route path="/species"></Route>
          <Route
            path="/"
            exact
            render={() => {
              return <CategoryCards />;
            }}
          ></Route>
        </Routes>
        <DisplayDetails />
      </div>
    </>
  );
};

export default DisplayData;
