import React, { useState, useEffect } from "react";
import LandingPage from "../LandingPage/LandingPage";
import Details from "../Details/Details";
import Names from "../Names/Names";
import { Routes, Route, useLocation } from "react-router-dom";
import { getCategory } from "../Helper/fetchAPI";
import "./main.css";

const Main = () => {
  const { pathname } = useLocation();
  const [list, setList] = useState([]);
  const routes = ["/people", "/planets", "/vehicles", "/species"];

  useEffect(() => {
    if (routes.includes(pathname)) fetchCategory();
  }, [pathname]);

  const fetchCategory = async () => {
    await getCategory(pathname)
      .then((returnedCategory) => {
        setList(returnedCategory);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="main-display">
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/people" element={<Names list={list} />}>
            <Route path="/people/:id" element={<Details list={list} />} />
          </Route>
          <Route path="/planets" element={<Names list={list} />}>
            <Route path="/planets/:id" element={<Details list={list} />} />
          </Route>
          <Route path="/vehicles" element={<Names list={list} />}>
            <Route path="/vehicles/:id" element={<Details list={list} />} />
          </Route>
          <Route path="/species" element={<Names list={list} />}>
            <Route path="/species/:id" element={<Details list={list} />} />
          </Route>
         </Routes>
      </div>
    </>
  );
};

export default Main;
