import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./details.css";

const Details = ({ list }) => {
  const { pathname } = useLocation();
  console.log(list);
  const { id } = useParams();
  console.log(id);
  let index = id - 1;
  const [details, setDetails] = useState([]);
  console.log(details);

  useEffect(() => {
    console.log(pathname.includes("people"));
    console.log("im here");
    switch (true) {
      case pathname.includes("people"):
        const people = [
          ["Name", list[index].name],
          ["Height", list[index].height],
          ["Mass", list[index].mass],
          ["Born", list[index].birth_year],
        ];
        console.log(people);
        setDetails(people);
        break;
      case pathname.includes("planets"):
        const planets = [
          ["Name", list[index].name],
          ["Rotation", list[index].rotation_period],
          ["Orbit", list[index].orbital_period],
          ["Climate", list[index].climate],
        ];
        setDetails(planets);
        break;
      case pathname.includes("vehicles"):
        const vehicles = [
          ["Name", list[index].name],
          ["Model", list[index].model],
          ["Length", list[index].length],
          ["Crew", list[index].crew],
        ];
        setDetails(vehicles);
        break;
      case pathname.includes("species"):
        const species = [
          ["Name", list[index].name],
          ["Classification", list[index].classification],
          ["Language", list[index].language],
          ["Designation", list[index].designation],
        ];
        setDetails(species);
        break;
    }
  }, [pathname]);

  console.log(details);
  return (
    <div className="search-data-details">
      <h5>More info</h5>
      {details.map((element, i) => (
        <div className="details-row" key={i}>
          <div className="detail-label">{element[0]}:</div>
          <div className="detail-info"> {element[1]} </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
