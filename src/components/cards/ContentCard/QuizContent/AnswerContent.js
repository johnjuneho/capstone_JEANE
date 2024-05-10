import React from 'react';
import './style.css'; 

function AnswerContent({ userAnswer, isCorrect, explanation, onNext, onBack }) {
  return (
    <div className="answer-content2">
      <div className={`user-answer ${isCorrect ? 'correct' : 'incorrect'}`}>
        {userAnswer}
      </div>
      <div className="explanation">
            {explanation}
      </div>
      {isCorrect ? (
        <button onClick={onNext} className="next-button">
            <div className="next-text">Next</div>
        </button>
      ) : (
        <button onClick={onBack} className="back-button">
            <div className="back-to-question">Back to Question</div>
        </button>
      )}
    </div>
  );
}

export default AnswerContent;
