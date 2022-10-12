import axios from "axios";
import DisplayData from "../DisplayData/DisplayData";
const baseURL = "https://swapi.dev/api/";

export const getCategories = async (category) => {
    let fetchResponse
   await axios.get(baseURL + category).then((response) => {
    fetchResponse = response.data.results
   })
  return (
    <>
      <DisplayData />
    </>
  );
};
