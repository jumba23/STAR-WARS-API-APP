import React, { useEffect, useState } from "react";
import axios from 'axios';

import SearchBar from "./SearchBar/SearchBar";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import TableLayout from "./TableLayout/TableLayout";
import Wrapper from "../Helpers/Wrapper";

const TableContent = () => {
  const BASE_URL = 'https://swapi.dev/api/people/';
  const [allCharacters, setAllCharacters] = useState ([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageURL, serCurrentPageURL] = useState(BASE_URL);
  const [nextPageURL, setNextPageURL] = useState(null);
  const [prevPageURL, setPrevPageURL] = useState(null);


  useEffect(() => {
      const getCharacters = async () => {
        const result = await axios(BASE_URL);
        console.log(result.data)

        setNextPageURL(convertHTTPtoHTTPS(result.data.next))
        if (result.data.previous === null){
          return
        } else {
          setPrevPageURL(convertHTTPtoHTTPS(result.data.previous))}
        console.log(nextPageURL)
        console.log(prevPageURL)

        result.data.reults.forEach(async (result) => {
       
        setNextPageURL(convertHTTPtoHTTPS(result.data.next))
       
   
        setIsLoading(false)
        setAllCharacters(result.data.results)
        })
      }
      getCharacters();
    },[])

  // const homeworld = () => {
  //   items.forEach(item ) 

  // }
    
    const convertHTTPtoHTTPS = (URL) => {
      const slicedHTTP = URL.slice(4);
      return `https${slicedHTTP}`
    }
    
  return (
    <Wrapper>
      <SearchBar />
      <TableLayout isLoading={isLoading} allCharacters={allCharacters}  />
      <NavigationButtons />
    </Wrapper>
  );
};

export default TableContent;
