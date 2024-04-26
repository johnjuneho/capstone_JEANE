import { React, Image } from 'react';
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
  const { type, title, image, alt, text } = cardContent;
  return (
    <div class="lesson-container">
      <img src={image} alt={alt} />
      <div class="lesson-heading">
        <p>{title}</p>
        <div class="lesson-text-container">
          <div class="lesson-text">{text}</div>
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
