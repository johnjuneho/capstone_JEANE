/**
 * This component represents the first lesson of the application.
 *
 * It includes the following functionalities:
 * - Rendering of the lesson content based on the current slide (lecture, quiz, or end screen).
 * - Navigation between slides.
 * - Displaying the lesson title and logo.
 * @returns {JSX.Element} The rendered Lesson1 component.
 */

import React, { useState } from 'react';
import HomeLogo from '../../cards/HomeLogo/HomeLogo';
import MenuCard from '../../cards/MenuCard/MenuCard';
import QuizContent from '../../cards/ContentCard/QuizContent/QuizContent';
import EndScreen from '../../cards/ContentCard/EndScreen/EndScreen';
import { L1Content } from '../../contentData/L1-Content';
import TextContent from '../../cards/ContentCard/TextContent/TextContent';
import '../../../App.css';

export default function Lesson1() {
  const content = L1Content.content;
  const [currSlide, setCurrSlide] = useState(0);

  /**
   * Function to change the current slide.
   * @param {number} newSlide The index of the new slide.
   */
  const slideChange = (newSlide) => {
    setCurrSlide(newSlide);
  };

  let cardContent;
  let contentComponent;
  let contentType = content[currSlide].type;

  switch (contentType) {
    case 'lecture':
      const { type, title, image, alt, text } = content[currSlide];
      cardContent = { type, title, image, alt, text };
      console.log(image); // For debugging purposes
      contentComponent = (
        <TextContent
          cardContent={cardContent}
          currSlide={currSlide}
          totalLength={content.length}
          slideChange={slideChange}
        />
      );
      break;
    case 'quiz':
      const { type: quizType, questionNumber, question, choices, answerIndex } = content[currSlide];
      cardContent = { type: quizType, questionNumber, question, choices, answerIndex };
      contentComponent = (
        <QuizContent
          cardContent={cardContent}
          currSlide={currSlide}
          totalLength={content.length}
          slideChange={slideChange}
        />
      );
      break;
    case 'end':
      const { lessonTitle, message } = content[currSlide];
      contentComponent = <EndScreen lessonTitle={lessonTitle} message={message} />;
      break;
    default:
      contentComponent = null;
  }

  return (
    <div className="home-dashboard">
      <div className="container">
        <div className="container-2">
          <div className="header">
            <div className="logo">
              <HomeLogo />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="menu">
          <MenuCard pageName="Lesson-1" />
        </div>
        <div className="content-card">{contentComponent}</div>
      </div>
    </div>
  );
}
