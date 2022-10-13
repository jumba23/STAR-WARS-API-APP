import React, { useState, useEffect } from "react";
import DisplayData from "./components/DisplayData/DisplayData";
import CategoryCards from "./components/CategoryCards/CategoryCards";
import Header from "./components/Header/Header";
import { getCategory } from "./components/Helper/getCategory";
import "./index.css";

function App() {
  const categories = ["PEOPLE", "PLANETS", "FILMS", "SPECIES"];
  const [category, setCategory] = useState("");
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

  const handleClick = (selectedCategory) => {
    setCategory(selectedCategory);
    fetchCategory();
  };
  return (
    <>
      <Header
        category={category}
        categories={categories}
        setCategory={setCategory}
      />
      {!category ? (
        <CategoryCards categories={categories} handleClick={handleClick} />
      ) : (
        <DisplayData categoryData={categoryData} />
      )}
    </>
  );
}

export default App;
