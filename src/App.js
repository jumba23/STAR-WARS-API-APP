import React from "react";

import TableContent from "./components/TableContent/TableContent";
import SearchBar from "./components/SearchBar/SearchBar";
import NavigationButtons from "./components/NavigationButtons/NavigationButtons";
import Wrapper from "./components/Helpers/Wrapper";
import "./index.css";

function App() {
  return (
    <Wrapper>
      <h1>STAR WARS CHARACTERS SEARCH</h1>
      <SearchBar />
      <TableContent />
      <NavigationButtons />
    </Wrapper>
  );
}

export default App;
