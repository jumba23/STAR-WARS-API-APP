import React, { useState } from "react";
import Main from "./components/Main/Main";
import LandingPage from "./components/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import "./index.css";

function App() {
  const [category, setCategory] = useState("");
  const handleClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  return (
    <>
      <Header category={category} />
      {!category ? (
        <LandingPage handleClick={handleClick} />
      ) : (
        <Main />
      )}
    </>
  );
}

export default App;
