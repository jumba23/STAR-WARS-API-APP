import React, { useState, useEffect } from "react";
import LandingPage from "../LandingPage/LandingPage";
import Details from "../Details/Details";
import Names from "../Names/Names";
import { Routes, Route, useLocation } from "react-router-dom";
import { getCategory } from "../Helper/fetchAPI";
import { getSearchTerm } from "../Helper/fetchAPI";
import "./main.css";

const Main = ({ searchTerm }) => {
  const { pathname } = useLocation();
  const [list, setList] = useState([]);
  const routes = ["/people", "/planets", "/vehicles", "/species"];

  useEffect(() => {
    if (routes.includes(pathname)) fetchCategory();
  }, [pathname]);

  useEffect(() => {
    fetchSearchTerm();
  }, [searchTerm]);

  const fetchCategory = async () => {
    await getCategory(pathname)
      .then((returnedCategory) => {
        setList(returnedCategory);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchSearchTerm = async () => {
    await getSearchTerm(searchTerm, pathname.split("/")[1])
      .then((returnedSearchTerm) => {
        setList(returnedSearchTerm);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="main-display">
        <Routes>
          <Route path="/people" element={<Names list={list} />}>
            <Route path=":id" element={<Details list={list} />} />
          </Route>
          <Route path="/planets" element={<Names list={list} />}>
            <Route path=":id" element={<Details list={list} />} />
          </Route>
          <Route path="/vehicles" element={<Names list={list} />}>
            <Route path=":id" element={<Details list={list} />} />
          </Route>
          <Route path="/species" element={<Names list={list} />}>
            <Route path=":id" element={<Details list={list} />} />
          </Route>
          <Route
            path="/"
            exact
            render={() => {
              return <LandingPage />;
            }}
          />
        </Routes>
      </div>
    </>
  );
};

export default Main;
