import { React, useState } from 'react';
import NextButtons from '../../NextButtons/NextButtons';
import './style.css';

export default function QuizContent({
  cardContent,
  currSlide,
  totalLength,
  slideChange,
}) {
  const { question, choices, answerIndex } = cardContent;
  const [choiceIdx, setChoiceIdx] = useState(null);
  const [answer, setAnswer] = useState(null);

  const onChoiceClick = (choice, index) => {
    console.log('hehy');
    setChoiceIdx(index);
    if (index === answerIndex) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickSlide = (idx) => {
    setChoiceIdx(null);
    slideChange(currSlide + idx);
  };
  return (
    <div className="quiz-container">
      <div className="question-container">
        <div className="question-title">Question 1</div>
        <p className="question-text">{question}</p>
      </div>
      {choices.map((choice, index) => (
        <button
          key={index}
          className={`answer-container ${
            choiceIdx === index ? 'selected-ans' : ''
          }`}
          onClick={() => onChoiceClick}
        >
          <div className="answer-text">
            <p className="answer-content">{choice.name}</p>
          </div>
        </button>
      ))}
      <section className="btn-nav">
        <button
          className="back-button"
          disabled={currSlide === 0}
          onClick={() => {
            onClickSlide(-1);
          }}
        >
          <p className="next-text">Back</p>
        </button>
        <div className="progress-count">
          <span className="active-q">{currSlide + 1}</span>
          <span className="total-q">/{totalLength}</span>
        </div>
        <button
          className="next-button"
          onClick={() => onClickSlide(1)}
          disabled={choiceIdx === null || answer !== true}
        >
          <p className="next-text">
            {currSlide === totalLength - 1 ? 'Finish' : 'Next'}
          </p>
        </button>
      </section>
    </div>
  );
}
