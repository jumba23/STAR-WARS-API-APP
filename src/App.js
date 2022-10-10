import React from "react";
import TableContent from "./components/TableContent/TableContent";
import CategoryCards from "./components/CategoriesCards/CategoriesCards";
import Header from "./components/Header/Header";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      {/* <TableContent /> */}
      <CategoryCards/>
    </>
  );
}

export default App;
