import React from "react";

import Table from "react-bootstrap/Table";
import classes from './TableContent.module.css';

const TableContent = () => {
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
        <tr>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableContent;
