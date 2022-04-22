import React from "react";
import { Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import classes from "./TableLayout.module.css";

const TableLayout = ({ allCharacters, loading }) => {
  return (
    <Table className={classes.Table}>
      <thead className={classes.Header}>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Birth Date</th>
          <th scope="col">Height</th>
          <th scope="col">Mass</th>
          <th scope="col">Homeworld</th>
          <th scope="col">Species</th>
        </tr>
      </thead>
      {loading === true ? (
        <tbody>
          <tr>
            <td align="center" colSpan={6}>
              <Spinner
                animation="border"
                role="status"
              ></Spinner>
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          {allCharacters.map((character, i) => (
            <tr key={i}>
              <td>{character.name}</td>
              <td>{character.birth_year}</td>
              <td>{character.height}</td>
              <td>{character.mass}</td>
              <td>{character.homeworld}</td>
              <td>{character.species}</td>
            </tr>
          ))}
        </tbody>
      )}
    </Table>
  );
};

export default TableLayout;
