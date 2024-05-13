/**
 * This component represents the introduction of the application.
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
import { IntroContent } from '../../contentData/Intro-Content';
import TextContent from '../../cards/ContentCard/TextContent/TextContent';
import '../../../App.css';

export default function Intro() {
  const content = IntroContent.content;
  const [currSlide, setCurrSlide] = useState(0);

  const slideChange = (newSlide) => {
    setCurrSlide(newSlide);
  };

  let cardContent;
  let contentComponent;
  let contentType = content[currSlide].type;

  if (contentType === 'lecture') {
    const { type, title, image, alt, text } = content[currSlide];
    cardContent = { type, title, image, alt, text };
    contentComponent = (
      <TextContent
        cardContent={cardContent}
        currSlide={currSlide}
        totalLength={content.length}
        slideChange={slideChange}
      />
    );
  } else if (contentType === 'quiz') {
    const { type, question, choices, answer } = content[currSlide];
    contentType = 'quiz';
    cardContent = { type, question, choices, answer };
    contentComponent = (
      <QuizContent
        cardContent={cardContent}
        currSlide={currSlide}
        totalLength={content.length}
        slideChange={slideChange}
      />
    );
  } else if (contentType === 'end') {
    const { type, title, image, alt, text } = content[currSlide];
    cardContent = { type, title, image, alt, text };
    contentComponent = <EndScreen cardContent={cardContent} />;
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
          <MenuCard pageName="Introduction" />
        </div>
        <div className="content-card">{contentComponent}</div>
      </div>
    </div>
  );
}
