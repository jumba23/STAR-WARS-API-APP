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
      </div>
    </>
  );
};

export default DisplayData;
