import "./displaydata.css";

const DisplayData = (props) => {
  const categoryDataArray = [...props.categoryData];
  console.log(categoryDataArray);
  return (
    <>
      <div className="search-data">
        <ul>
          {categoryDataArray.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
        <div className="search-data-details">
          <h5>Selection details</h5>
          <p>Name: </p>
          <p>Birth Year: </p>
          <p>Mass: </p>
        </div>
      </div>
    </>
  );
};

export default DisplayData;
