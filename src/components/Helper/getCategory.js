import axios from "axios";
const baseURL = "https://swapi.dev/api/";

export const getCategory = async (category) => {
  let categoryArray = [];
  const getRequestResult = await axios(baseURL + category);

  let resultArray = getRequestResult.data.results;
  resultArray.map((element) => {
    return !element.name
      ? (categoryArray = [...categoryArray, element.title])
      : (categoryArray = [...categoryArray, element.name]);
  });
  return categoryArray;
};
