import React, { useState } from "react";
import "./styles.scss";

import algorithmFinder from "./tree";

const UserInputButtons = () => {
  const [currentQuestionText, setCurrentQuestionText] = useState(
    algorithmFinder.getRoot().questionString
  );
  const [isSuccessBtnDisabled, setIsSuccessBtnDisabled] = useState(false);
  const [isErrorBtnDisabled, setIsErrorBtnDisabled] = useState(false);

  const handleSuccessBtnClick = () => {
    const rootNode = algorithmFinder.getRoot();
    const currentNode = algorithmFinder.getNode(rootNode, currentQuestionText);
    setCurrentQuestionText(currentNode.yes.questionString);

    if (currentNode.yes.yes === null && currentNode.yes.no === null) {
      setIsSuccessBtnDisabled(true);
      setIsErrorBtnDisabled(true);
    }
  };

  const handleErrorBtnClick = () => {
    const rootNode = algorithmFinder.getRoot();
    const currentNode = algorithmFinder.getNode(rootNode, currentQuestionText);
    setCurrentQuestionText(currentNode.no.questionString);

    if (currentNode.no.yes === null && currentNode.no.no === null) {
      setIsSuccessBtnDisabled(true);
      setIsErrorBtnDisabled(true);
    }
  };

  const handleRestartBtnClick = () => {
    setCurrentQuestionText(algorithmFinder.getRoot().questionString);
    setIsSuccessBtnDisabled(false);
    setIsErrorBtnDisabled(false);
  };

  return (
    <div className="algorithm-finder-wrapper">
      <h3 className="question-value">{currentQuestionText}</h3>

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

      {isSuccessBtnDisabled && isErrorBtnDisabled && (
        <button className="btn-restart" onClick={handleRestartBtnClick}>
          Let's Restart!
        </button>
      )}
    </div>
  );
};

export default UserInputButtons;
