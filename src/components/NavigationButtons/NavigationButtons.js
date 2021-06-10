import React from "react";

import Button from 'react-bootstrap/Button';
import './NavigationButtons.css';


const NavigationButtons = () => {
  return (
    <div class="d-grid gap-3 d-md-flex justify-content-md-end">
      <Button variant="secondary" id="previousButton">PREVIOUS</Button>
      <Button variant="secondary" id="nextButton">NEXT</Button>
    </div>
  );
};

export default NavigationButtons;
