import React from 'react';
import NextButtons from '../../NextButtons/NextButtons';
import './style.css';

export default function TextContent({
  cardContent,
  currSlide,
  totalLength,
  slideChange,
}) {
  const onClickSlide = (idx) => {
    slideChange(currSlide + idx);
  };
  return (
    <div class="lesson-container">
      <img
        src={require('../../../images/text-content-placeholder.png')}
        alt="A cartoon person training a dragon."
      />
      <div class="lesson-heading">
        <p>Objective 1: Asking Clearly</p>
        <div class="lesson-text-container">
          <div class="lesson-text">
            It’s important to learn how to ask ChatGPT in a way that gets us the
            answers we need without any mix-ups or wrong information. It's like
            playing a word game with a computer—we need to pick our words super
            carefully! As we have learned, large language modules predict the
            next words. We need to think like AI and choose our words carefully!
          </div>
        </div>
      </div>
      <section className="btn-nav">
        <button
          className="back-button"
          disabled={currSlide === 0}
          onClick={() => onClickSlide(-1)}
        >
          <p className="next-text">Back</p>
        </button>
        <div className="progress-count">
          <span className="active-q">{currSlide}</span>
          <span className="total-q">/{totalLength}</span>
        </div>
        <button className="next-button" onClick={() => onClickSlide(1)}>
          <p className="next-text">
            {currSlide === totalLength - 1 ? 'Finish' : 'Next'}
          </p>
        </button>
      </section>
    </div>
  );
}
