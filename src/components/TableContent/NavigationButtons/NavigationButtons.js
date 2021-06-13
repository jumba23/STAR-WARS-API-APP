import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

const NavigationButtons = (props) => {
  const [nextIsDisabled, setNextIsDisabled] = useState(false);
  const [prevIsDisabled, setPrevIsDisabled] = useState(false);

  useEffect(() => {
    checkForDisabledButton();
  }, [props.nextPageURL, props.prevPageURL]);

  const checkForDisabledButton = async () => {
    if (props.nextPageURL === null) {
      setNextIsDisabled(true);
    } else {
      setNextIsDisabled(false);
    }
    if (props.prevPageURL === null) {
      setPrevIsDisabled(true);
    } else {
      setPrevIsDisabled(false);
    }
  };

  return (
    <div className="d-grid gap-3 d-md-flex justify-content-md-end">
      <Button
        variant="secondary"
        id="previousButton"
        onClick={() => props.getPrevPage()}
        disabled={prevIsDisabled}
      >
        PREVIOUS
      </Button>
      <Button
        variant="secondary"
        id="nextButton"
        onClick={() => props.getNextPage()}
        disabled={nextIsDisabled}
      >
        NEXT
      </Button>
    </div>
  );
};

export default NavigationButtons;
