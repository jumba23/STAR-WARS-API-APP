import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

const NavigationButtons = (props) => {
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);

  useEffect(() => {
    checkForDisabledButton();
  }, [props.nextPageURL, props.prevPageURL]);

  const checkForDisabledButton = async () => {
    setIsNextDisabled(!Boolean(props.nextPageURL));

    setIsPrevDisabled(!Boolean(props.prevPageURL));
  };

  return (
    <div className="d-grid gap-3 d-md-flex justify-content-md-end">
      <Button
        variant="secondary"
        id="previousButton"
        onClick={() => props.getPrevPage()}
        disabled={isPrevDisabled}
      >
        PREVIOUS
      </Button>
      <Button
        variant="secondary"
        id="nextButton"
        onClick={() => props.getNextPage()}
        disabled={isNextDisabled}
      >
        NEXT
      </Button>
    </div>
  );
};

export default NavigationButtons;
