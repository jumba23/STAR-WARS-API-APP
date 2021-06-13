import React, { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import './NavigationButtons.css';


const NavigationButtons = (props) => {
  // const [nextIsDisabled, setNextIsDisabled] = useState(false);
  // const [prevIsDisabled, setPrevIsDisabled] = useState(false);

  let nextIsDisabled = false;
  let prevIsDisabled = false;

  useEffect(() => {
    const checkForDisabledButton = () => {
      console.log(props.prevPageURL)
      console.log(props.nextPageURL)
  
      if (props.nextPageURL === null){
        // setNextIsDisabled(true)
        nextIsDisabled = true;
        console.log(props.nextPageURL)
      } 
  
      if(props.prevPageURL === null){
        // setPrevIsDisabled(true)
        prevIsDisabled = true;
        console.log(props.prevPageURL)
      }
    }
    checkForDisabledButton()
    console.log(nextIsDisabled)
    console.log(prevIsDisabled)
  }, [props.nextPageURL, props.prevPageURL])

  

  return (
    <div className="d-grid gap-3 d-md-flex justify-content-md-end">
      <Button variant="secondary" id="previousButton" onClick={() => props.getPrevPage()} disabled={prevIsDisabled}>PREVIOUS</Button>
      <Button variant="secondary" id="nextButton" onClick={() => props.getNextPage()} disabled={nextIsDisabled}>NEXT</Button>
    </div>
  );
};

export default NavigationButtons;
