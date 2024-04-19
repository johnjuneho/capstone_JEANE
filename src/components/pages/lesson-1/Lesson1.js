import React from 'react';
import { useParams } from 'react-router-dom';
import HomeButton from '../../cards/HomeButton/HomeButton';
import MenuCard from '../../cards/MenuCard/MenuCard';
import QuizContent from '../../cards/ContentCard/QuizContent/QuizContent';
import '../../../App.css';

export default function Lesson1() {
  const params = useParams();
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
        <div className="content-card">
          <QuizContent />
        </div>
      </div>
    </div>
  );
}
