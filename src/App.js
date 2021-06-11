import React from "react";

import TableContent from "./components/TableContent/TableContent";
import Wrapper from "./components/Helpers/Wrapper";
import "./index.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <Wrapper>
      <Header />
      <TableContent />
    </Wrapper>
  );
}

export default App;
