import React from 'react';
import HomeButton from '../../cards/HomeButton/HomeButton';
import MenuCard from '../../cards/MenuCard/MenuCard';
import './style.css';

export default function Lesson1() {
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
          <MenuCard />
        </div>
        <div className="content-card"></div>
      </div>
    </div>
  );
}
