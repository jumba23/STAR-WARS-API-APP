import axios from "axios";
const baseURL = "https://swapi.dev/api";

export const getCategory = async (pathname) => {
  let categoryList = [];
  console.log("inside getCategory ", pathname)
  const getRequestResult = await axios(baseURL + pathname);

  let resultArray = getRequestResult.data.results;
  resultArray.map((element) => {
    return !element.name
      ? (categoryList = [...categoryList, element.title])
      : (categoryList = [...categoryList, element.name]);
  });
  return categoryList;
};
