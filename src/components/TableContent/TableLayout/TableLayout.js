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
        {props.items.map((item, i) => (
          <tr key={i}>
            <td >{item.name}</td>
            <td >{item.birth_year}</td>
            <td >{item.height}</td>
            <td >{item.mass}</td>
            <td >{item.homeworld}</td>
            <td >{item.species}</td>
          </tr>
         ))}
      </tbody>
    </Table>
    )
 };

export default TableLayout;
