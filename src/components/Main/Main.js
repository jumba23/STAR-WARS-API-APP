import React, { useState, useEffect } from "react";
import "./main.css";
import DisplayDetails from "../DisplayDetails/DisplayDetails";
import CategoryCards from "../CategoryCards/CategoryCards";
import Names from "../Names/Names";
import { Routes, Route, useLocation } from "react-router-dom";
import { getCategory } from "../Helper/getCategory";

const DisplayData = () => {
  const { pathname } = useLocation();
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, [pathname]);

  const fetchCategory = async () => {
    console.log(pathname);
    await getCategory(pathname)
      .then((returnedCategory) => {
        console.log(returnedCategory);
        setList(returnedCategory);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="search-data">
        <Routes>
          <Route path="/people" element={<Names list={list} />} />
          <Route path="/planets" element={<Names list={list} />} />
          <Route path="/films" element={<Names list={list} />} />
          <Route path="/species" element={<Names list={list} />} />
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
