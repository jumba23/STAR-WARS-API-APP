import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar/SearchBar";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import TableLayout from "./TableLayout/TableLayout";

const TableContent = () => {
  const startURL = "https://swapi.dev/api/people/";
  const [loading, setLoading] = useState(true);
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState(startURL);
  const [nextPageURL, setNextPageURL] = useState(null);
  const [prevPageURL, setPrevPageURL] = useState(null);

  useEffect(() => {
    getCharacters();
  }, [currentPageURL]);

  useEffect(() => {
    setAllCharacters([]);
    setLoading(true);
  }, [nextPageURL, prevPageURL]);

  const getCharacters = async () => {
    const getRequestResult = await axios(currentPageURL);

    setNextPageURL(getRequestResult.data.next);
    setPrevPageURL(getRequestResult.data.previous);

    let characters = getRequestResult.data.results;
    characters = Promise.all(
      characters.map(async (character) => {
        character.homeworld = await getHomeworldName(character);
        character.species = await getSpeciesName(character);
        return character;
      })
    );
    characters.then((result) => {
      setAllCharacters(result);
      setLoading(false);
    });
  };

  const getHomeworldName = async (character) => {
    character.homeworld = await axios(character.homeworld);
    return character.homeworld.data.name;
  };

  const getSpeciesName = async (character) => {
    if (character.species.length === 0) {
      return "Unknown";
    } else {
      character.species = await axios(character.species[0]);
      return character.species.data.name;
    }
  };

  const getNextPage = () => {
    if (nextPageURL === "null") return;
    setCurrentPageURL(nextPageURL);
  };

  const getPrevPage = () => {
    if (prevPageURL === "null") return;
    setCurrentPageURL(prevPageURL);
  };

  const search = (query) => setCurrentPageURL(startURL + query);

  return (
    <>
      <SearchBar search={search} />
      <TableLayout allCharacters={allCharacters} loading={loading} />
      <NavigationButtons
        getPrevPage={getPrevPage}
        getNextPage={getNextPage}
        nextPageURL={nextPageURL}
        prevPageURL={prevPageURL}
      />
    </>
  );
};

export default TableContent;
