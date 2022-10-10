import React ,{useState} from "react";
import CategoryCards from "./components/CategoryCards/CategoryCards";
import Header from "./components/Header/Header";
import "./index.css";

function App() {
const [category, setCategory] = useState('')

const handleClick = (selectedCategory) => {
    setCategory(selectedCategory)
}
  return (
    <>
      <Header category={category}/>
      <CategoryCards handleClick={handleClick}/>
    </>
  );
}

export default App;
