import { React } from 'react';
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
    <section class="lesson-container">
      <img src={image} alt={alt} />
      <article class="lesson-heading">
        <h2>{title}</h2>
        <div class="lesson-text-container">
          <p class="lesson-text">{text}</p>
        </div>
      </article>
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
    </section>
  );
}
