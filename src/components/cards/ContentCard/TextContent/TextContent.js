/*
 * This component renders the a lesson slide that features and image, title, and paragraph.
 *
 * Props:
 * - cardContent: An object containing information about the slide content, including type, title, image, alt, and text.
 * - currSlide: The index of the current slide.
 * - totalLength: The total number of slides in the lesson.
 * - slideChange: A function to change the current slide.
 *
 * @param {Object} cardContent Information about the slide content.
 * @param {number} currSlide The index of the current slide.
 * @param {number} totalLength The total number of slides in the lesson.
 * @param {Function} slideChange Function to change the current slide.
 * @returns {JSX.Element} The rendered TextContent component.
 */

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
    <section className="lesson-container">
      <img src={image} alt={alt} />
      <article className="lesson-heading">
        <h2>{title}</h2>
        <div className="lesson-text-container">
          <p className="lesson-text">{text}</p>
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
