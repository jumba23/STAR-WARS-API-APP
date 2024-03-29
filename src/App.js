import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Main from "./components/Main/Main";
import LandingPage from "./components/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import "./index.css";

function App() {
  const { pathname } = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      {pathname === "/" ? <LandingPage /> : <Main searchTerm={searchTerm} />}
    </>
  );
}
export default App;
