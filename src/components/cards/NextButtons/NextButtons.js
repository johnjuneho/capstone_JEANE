import React from 'react';
import './style.css';

export default function NextButtons({ currSlide, totalLength, choiceIdx }) {
  const onClickNext = () => {};

  return (
    <section className="btn-nav">
      <button className="back-button" disabled={currSlide === 0}>
        <p className="next-text">Back</p>
      </button>
      <div className="progress-count">
        <span className="active-q">{currSlide}</span>
        <span className="total-q">/{totalLength}</span>
      </div>
      <button
        className="next-button"
        onClick={onClickNext}
        disabled={choiceIdx === null}
      >
        <p className="next-text">
          {currSlide === totalLength - 1 ? 'Finish' : 'Next'}
        </p>
      </button>
    </section>
  );
}
