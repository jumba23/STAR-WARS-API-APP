import React, { useEffect, useState } from "react";
import axios from 'axios';

import SearchBar from "./SearchBar/SearchBar";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import TableLayout from "./TableLayout/TableLayout";
import Wrapper from "../Helpers/Wrapper";

const TableContent = () => {
  const [items, setItems] = useState ([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const getItems = async () => {
        const result = await axios('https://swapi.dev/api/people/')

        console.log(result.data)
        setItems(result.data.results)
        setIsLoading(false)
      }
      getItems();
    },[])

  return (
    <Wrapper>
      <SearchBar />
      <TableLayout isLoading={isLoading} items={items}  />
      <NavigationButtons />
    </Wrapper>
  );
};

export default TableContent;
