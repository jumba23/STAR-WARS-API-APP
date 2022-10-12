import React, { useState } from "react";
import DisplayData from "./components/DisplayData/DisplayData"
import CategoryCards from "./components/CategoryCards/CategoryCards";
import Header from "./components/Header/Header";
import {getCategories} from "./components/Helper/getCategories"
import "./index.css";

function App() {
  const [category, setCategory] = useState("");
  const [catSearchResult, setCatSearchResult] = useState("")

  const handleClick = (selectedCategory) => {
    setCategory(selectedCategory)

    setCatSearchResult(getCategories(selectedCategory))
    };
  return (
    <>
      <Header category={category} />
      {!category ? <CategoryCards handleClick={handleClick} /> : <DisplayData />}
    </>
  );
}

export default App;
