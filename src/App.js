import React, {useState} from "react";
import DisplayData from "./components/DisplayData/DisplayData";
import CategoryCards from "./components/CategoryCards/CategoryCards";
import Header from "./components/Header/Header";
import "./index.css";

function App() {
  const [category, setCategory] = useState("");
  const handleClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  return (
    <>
      <Header
        category={category}
      />
      {!category ? (
        <CategoryCards handleClick={handleClick} />
      ) : (
        <DisplayData category={category} />
      )}
    </>
  );
}

export default App;
