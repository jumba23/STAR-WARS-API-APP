import React from "react";

import Button from 'react-bootstrap/Button';
import './NavigationButtons.css';


const NavigationButtons = (props) => {
  

  return (
    <div className="d-grid gap-3 d-md-flex justify-content-md-end">
      <Button variant="secondary" id="previousButton" onClick={previousButtonHandle}>PREVIOUS</Button>
      <Button variant="secondary" id="nextButton" onClick={nextButtonHandle}>NEXT</Button>
    </div>
  );
};

export default NavigationButtons;
