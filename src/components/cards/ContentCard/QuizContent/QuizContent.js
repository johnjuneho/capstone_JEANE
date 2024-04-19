import React from 'react';
import NextButtons from '../../NextButtons/NextButtons';
import './style.css';

export default function QuizContent() {
  return (
    <div class="quiz-container">
      <div class="question-container">
        <div class="question-title">Question 1</div>
        <p class="question-text">
          What is the most important feature of a good prompt?
        </p>
      </div>
      <div class="answer-container">
        <div class="answer-text">
          <p class="answer-content">Specificity</p>
        </div>
      </div>
      <div class="answer-container">
        <div class="answer-text">
          <p class="answer-content">Politeness</p>
        </div>
      </div>
      <div class="answer-container">
        <div class="answer-text">
          <p class="answer-content">Length</p>
        </div>
      </div>
      <NextButtons />
    </div>
  );
}
