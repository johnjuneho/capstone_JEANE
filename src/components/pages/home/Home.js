import React from 'react';
import HomeLogo from '../../cards/HomeLogo/HomeLogo';
import MenuCard from '../../cards/MenuCard/MenuCard';
import OverviewContent from '../../cards/ContentCard/OverviewContent/OverviewContent';
import '../../../App.css';

export default function Home() {
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
          <MenuCard pageName="Overview" />
        </div>
        <div className="content-card">
          <OverviewContent />
        </div>
      </div>
    </div>
  );
}




