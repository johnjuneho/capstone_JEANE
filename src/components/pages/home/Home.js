import React from 'react';
import HomeButton from '../../cards/HomeButton/HomeButton';
import MenuCard from '../../cards/MenuCard/MenuCard';
import OverviewCard from '../../cards/OverviewCard/OverviewCard';
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
          <MenuCard />
        </div>
        <div className="overview">
          <OverviewCard />
        </div>
      </div>
    </div>
  );
}
