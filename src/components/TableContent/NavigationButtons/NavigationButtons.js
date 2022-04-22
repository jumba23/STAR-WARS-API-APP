import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const NavigationButtons = ({
  nextPageURL,
  prevPageURL,
  getNextPage,
  getPrevPage,
}) => {
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);

  useEffect(() => {
    checkForDisabledButton();
  }, [nextPageURL, prevPageURL]);

  const checkForDisabledButton = async () => {
    setIsNextDisabled(!Boolean(nextPageURL));
    setIsPrevDisabled(!Boolean(prevPageURL));
  };

  return (
    <div className="d-grid gap-3 d-md-flex justify-content-md-end">
      <Button
        variant="secondary"
        id="previousButton"
        onClick={() => getPrevPage()}
        disabled={isPrevDisabled}
      >
        PREVIOUS
      </Button>
      <Button
        variant="secondary"
        id="nextButton"
        onClick={() => getNextPage()}
        disabled={isNextDisabled}
      >
        NEXT
      </Button>
    </div>
  );
};

export default NavigationButtons;
