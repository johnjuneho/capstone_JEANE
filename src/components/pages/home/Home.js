import React from 'react';
import HomeButton from '../../HomeButton/HomeButton';
import MenuCard from '../../MenuCard/MenuCard';
import './style.css';

export default function Home() {
  return (
    <div className="home">
      <div className="logo-container">
        <div className="logo-button">
          <HomeButton />
        </div>
      </div>
      <div className="menu">
        <MenuCard />
      </div>
    </div>
  );
}
