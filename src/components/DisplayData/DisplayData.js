import "./displaydata.css";
import Card from "react-bootstrap/Card";

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
        <Card style={{ width: "18rem" }} bg="dark" className="mb-2" >
          <Card.Body >
            <Card.Title className= "fs-6 fw-bolder fst-italic">More Info</Card.Title>
            <Card.Text className="text-start fs-6 fw-normal lh-sm">
              Name: Mike Jordan
            </Card.Text>
            <Card.Text className="text-start fs-6 fw-normal lh-sm">
              Birth Date: 04-93-1960
             </Card.Text>
            <Card.Text className="text-start fs-6 fw-normal lh-sm">
              Mass: 192
             </Card.Text>
            <Card.Text className="text-start fs-6 fw-normal lh-sm">
              Height: 34
              </Card.Text>
            <Card.Text className="text-start fs-6 fw-normal lh-sm">
              Homeworld: Planet Earth 
             </Card.Text>
            <Card.Text className="text-start fs-6 fw-normal lh-lg text-break">
              Species:"Human"
             </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default DisplayData;
