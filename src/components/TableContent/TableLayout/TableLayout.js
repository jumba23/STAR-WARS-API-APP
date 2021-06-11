import React from "react";

import classes from "./TableLayout.module.css";
import Table from "react-bootstrap/Table";



const TableLayout = (props) => {

  return (
    <Table className={classes.Table}>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Birth Date</th>
          <th scope="col">Height</th>
          <th scope="col">Mass</th>
          <th scope="col">Homeworld</th>
          <th scope="col">Species</th>
        </tr>
      </thead>
      <tbody>
        {props.allCharacters.map((character, i) => (
          <tr key={i}>
            <td >{character.name}</td>
            <td >{character.birth_year}</td>
            <td >{character.height}</td>
            <td >{character.mass}</td>
            <td >{character.homeworld}</td>
            <td >{character.species}</td>
          </tr>
         ))}
      </tbody>
    </Table>
    )
 };

export default TableLayout;
