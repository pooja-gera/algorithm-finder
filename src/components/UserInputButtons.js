import React, { useState } from "react";
import "./styles.scss";
import algorithmFinder from "./tree";
import questionSummaries from "./questionConcepts"; // for importing concepts related to questions

const UserInputButtons = () => {
  const [currentQuestionText, setCurrentQuestionText] = useState(
    algorithmFinder.getRoot().questionString
  );
  
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isSuccessBtnDisabled, setIsSuccessBtnDisabled] = useState(false);
  const [isErrorBtnDisabled, setIsErrorBtnDisabled] = useState(false);
  const [currentNode, setCurrentNode] = useState(algorithmFinder.getRoot()); 

  // Function to print the summary
  const getQuestionSummary = (questionText) => {
    return questionSummaries[questionText] || "Summary not available.";
  };

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleSuccessBtnClick = () => {
    setCurrentNode(currentNode.yes); 
    setCurrentQuestionText(currentNode.yes.questionString);
    setIsAccordionOpen(false);

    if (currentNode.yes.yes === null && currentNode.yes.no === null) {
      setIsSuccessBtnDisabled(true);
      setIsErrorBtnDisabled(true);
    }
  };

  const handleErrorBtnClick = () => {
    setCurrentNode(currentNode.no)
    setCurrentQuestionText(currentNode.no.questionString);
    setIsAccordionOpen(false); 

    if (currentNode.no.yes === null && currentNode.no.no === null) {
      setIsSuccessBtnDisabled(true);
      setIsErrorBtnDisabled(true);
    }
  };

  const handleRestartBtnClick = () => {
    setCurrentNode(algorithmFinder.getRoot()); 
    setCurrentQuestionText(algorithmFinder.getRoot().questionString);
    setIsAccordionOpen(false);
    setIsSuccessBtnDisabled(false);
    setIsErrorBtnDisabled(false);
  };

  return (
    <div className="algorithm-finder-wrapper">
      {/* Accordion for the question */}
      <div className="accordion" onClick={handleAccordionToggle}>
        <h3 className="question-value">{currentQuestionText}</h3>
        <div className={`accordion-content ${isAccordionOpen ? "open" : ""}`}>
          {isAccordionOpen && (
            <p className="question-summary">{getQuestionSummary(currentQuestionText)}</p>
          )}
        </div>
      </div>

      {/* Buttons move down when accordion expands */}
      <div className="action-btns">
        <button
          className="btn-success"
          onClick={handleSuccessBtnClick}
          disabled={isSuccessBtnDisabled}
        >
          Yes
        </button>
        <button
          className="btn-error"
          onClick={handleErrorBtnClick}
          disabled={isErrorBtnDisabled}
        >
          No
        </button>
      </div>

      {/* Restart button */}
      {isSuccessBtnDisabled && isErrorBtnDisabled && (
        <button className="btn-restart" onClick={handleRestartBtnClick}>
          Let's Restart!
        </button>
      )}
    </div>
  );
};

export default UserInputButtons;

