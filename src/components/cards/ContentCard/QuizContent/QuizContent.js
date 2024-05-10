/**
 * This component renders a quiz question with multiple-choice answers.
 *
 * Props:
 * - cardContent: An object containing information about the quiz content, including the question, choices, and answer index.
 * - currSlide: The index of the current slide.
 * - totalLength: The total number of slides in the lesson.
 * - slideChange: A function to change the current slide.
 *
 * @param {Object} cardContent Information about the quiz content.
 * @param {number} currSlide The index of the current slide.
 * @param {number} totalLength The total number of slides in the lesson.
 * @param {Function} slideChange Function to change the current slide.
 * @returns {JSX.Element} The rendered QuizContent component.
 */

import React, { useState } from 'react';
import Modal from 'react-modal';
import AnswerContent from './AnswerContent';  
import './style.css';

export default function QuizContent({
  cardContent,
  currSlide,
  totalLength,
  slideChange,
}) {
  const { questionNumber, question, choices, answerIndex } = cardContent;
  const [choiceIdx, setChoiceIdx] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);  

  const onChoiceClick = (choice, index) => {
    setChoiceIdx(index);
    setShowAnswer(true);  
  };

  const onNext = () => {
    setShowAnswer(false);
    slideChange(currSlide + 1);
  };

  const onBackToQuestion = () => {
    setShowAnswer(false);
  };

  const onGoBack = () => {
    if (currSlide > 0) {
      slideChange(currSlide - 1);
    }
  };

  if (showAnswer) {
    return <AnswerContent
      userAnswer={choices[choiceIdx].name}
      isCorrect={choiceIdx === answerIndex}
      explanation={choices[choiceIdx].explanation}
      onNext={onNext}
      onBack={onBackToQuestion}
    />;
  }

  return (
    <section className="quiz-container">
      <div className="question-container">
        <h2 className="question-title">Question {questionNumber}</h2>
        <p className="question-text">{question}</p>
      </div>
      {choices.map((choice, index) => (
        <button
          key={index}
          className={`answer-container ${choiceIdx === index ? 'selected-ans' : ''}`}
          onClick={() => onChoiceClick(choice, index)}
        >
          <div className="answer-text">
            <p className="answer-content">{choice.name}</p>
          </div>
        </button>
      ))}
      <section className="btn-nav">
        <button
          className="back-button"
          onClick={onGoBack}
        >
          <p className="next-text">Back</p>
        </button>
        <div className="progress-count">
          <span className="active-q">{currSlide + 1}</span>
          <span className="total-q">/{totalLength}</span>
        </div>
        {/* Next button is conditionally rendered in AnswerContent instead */}
      </section>
    </section>
  );
}
