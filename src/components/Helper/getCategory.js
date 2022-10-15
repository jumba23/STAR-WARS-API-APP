import axios from "axios";
const baseURL = "https://swapi.dev/api";

export const getCategory = async (pathname) => {
  const getRequestResult = await axios(baseURL + pathname);

  let ListArray = getRequestResult.data.results;
  return ListArray;
};
