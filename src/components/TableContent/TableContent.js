import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar/SearchBar";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import TableLayout from "./TableLayout/TableLayout";
import Wrapper from "../Helpers/Wrapper";

const TableContent = () => {
  const startURL = "https://swapi.dev/api/people/";
  const [allCharacters, setAllCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageURL, setCurrentPageURL] = useState(startURL);
  const [nextPageURL, setNextPageURL] = useState(null);
  const [prevPageURL, setPrevPageURL] = useState(null);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const getRequestResult = await axios(currentPageURL);
    console.log(getRequestResult.data);

    setNextPageURL(getRequestResult.data.next);

    setPrevPageURL(getRequestResult.data.previous);

    console.log(nextPageURL);
    console.log(prevPageURL);

    getRequestResult.data.results.forEach(async (character) => {
      character.homeworld = await getHomeworldName(character);
      character.species = await getSpeciesName(character);
      setAllCharacters((allCharacters) => [...allCharacters, character]);
    });
    setIsLoading(false);
  };

  const getHomeworldName = async (character) => {
    character.homeworld = await axios(convertHTTPtoHTTPS(character.homeworld));
    return character.homeworld.data.name;
  };

  const getSpeciesName = async (character) => {
    if (character.species.length === 0) {
      return (character.species = "Unknown");
    } else {
      character.species = await axios(convertHTTPtoHTTPS(character.species[0]));
      return character.species.data.name;
    }
  };

  const convertHTTPtoHTTPS = (URL) => {
    const slicedHTTP = URL.slice(4);
    return `https${slicedHTTP}`;
  };

  return (
    <Wrapper>
      <SearchBar />
      <TableLayout isLoading={isLoading} allCharacters={allCharacters} />
      <NavigationButtons />
    </Wrapper>
  );
};

export default TableContent;
