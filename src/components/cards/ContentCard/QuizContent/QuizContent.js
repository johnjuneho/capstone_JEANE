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

import { React, useState } from 'react';
import Modal from 'react-modal';
import ExplainPopup from '../ExplainPopup/ExplainPopup';
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
  const [modalIsOpen, setIsOpen] = useState(false);
  let currChoice;

  function closeModal() {
    setIsOpen(false);
    document.querySelector('.quiz-container').classList.remove('hidden');
  }

  /**
   * Handle when a choice is clicked.
   * @param {Object} choice The choice object.
   * @param {number} index The index of the choice in the choices array.
   */
  const onChoiceClick = (choice, index) => {
    currChoice = choice.explanation;
    setChoiceIdx(index);
    document.querySelector('.quiz-container').classList.add('hidden');
    if (index === answerIndex) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
    setIsOpen(true);
  };

  /**
   * Handle when next/back buttons are clicked.
   * @param {number} idx The index increment for the next/back action.
   */
  const onClickSlide = (idx) => {
    setChoiceIdx(null);
    slideChange(currSlide + idx);
  };

  return (
    <section className="quiz-container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="custom-overlay"
        className="modal"
      >
        <ExplainPopup message={currChoice} closeModal={closeModal} />
      </Modal>
      <div className="question-container">
        <h2 className="question-title">Question 1</h2>
        <p className="question-text">{question}</p>
      </div>
      {choices.map((choice, index) => (
        <button
          key={index}
          className={`answer-container ${
            choiceIdx === index ? 'selected-ans' : ''
          }`}
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
        <button className="next-button" onClick={() => onClickSlide(1)}>
          <p className="next-text">
            {currSlide === totalLength - 1 ? 'Finish' : 'Next'}
          </p>
        </button>
      </section>
    </section>
  );
}
