import React, { useState } from 'react';
import HomeButton from '../../cards/HomeButton/HomeButton';
import MenuCard from '../../cards/MenuCard/MenuCard';
import QuizContent from '../../cards/ContentCard/QuizContent/QuizContent';
import EndScreen from '../../cards/ContentCard/EndScreen/EndScreen';
import { L1Content } from '../../../Content/L1-Content';
import TextContent from '../../cards/ContentCard/TextContent/TextContent';
import '../../../App.css';

export default function Lesson1() {
  const content = L1Content.content;
  const [currSlide, setCurrSlide] = useState(0);

  const slideChange = (newSlide) => {
    setCurrSlide(newSlide);
  };

  let cardContent;
  let contentComponent;
  let contentType = content[currSlide].type;

  if (contentType === 'lecture') {
    const { type, image, text } = content[currSlide];
    cardContent = { type, image, text };
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
    const { lessonTitle, message } = content[currSlide];
    contentComponent = (
      <EndScreen lessonTitle={lessonTitle} message={message} />
    );
  }

  return (
    <div className="home-dashboard">
      <div className="container">
        <div className="container-2">
          <div className="header">
            <div className="logo">
              <HomeButton />
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
