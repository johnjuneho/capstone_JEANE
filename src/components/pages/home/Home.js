import React from 'react';
import HomeButton from '../../cards/HomeButton/HomeButton';
import MenuCard from '../../cards/MenuCard/MenuCard';
import OverviewContent from '../../cards/ContentCard/OverviewContent/OverviewContent';
import './style.css';

export default function Home() {
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
          <MenuCard pageName="Overview" />
        </div>
        <div className="content-card">
          <OverviewContent />
        </div>
      </div>
    </div>
  );
}
