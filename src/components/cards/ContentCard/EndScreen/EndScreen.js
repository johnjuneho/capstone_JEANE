import { React } from 'react';
import './style.css';

export default function TextContent({ cardContent }) {
  const { endTitle, endImage, endAlt, endText } = cardContent;

  return (
    <section className="lesson-container">
      <img src={endImage} alt={endAlt} className="content-img" />
      <article className="lesson-heading">
        <h2>{endTitle}</h2>
        <div className="lesson-text-container">
          <p className="lesson-text">{endText}</p>
        </div>
      </article>
      <div className="divider"></div>
    </section>
  );
}
