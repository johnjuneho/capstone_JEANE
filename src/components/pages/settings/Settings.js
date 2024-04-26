import React from 'react';
import { useParams } from 'react-router-dom';
import HomeLogo from '../../cards/HomeLogo/HomeLogo';
import MenuCard from '../../cards/MenuCard/MenuCard';
import '../../../App.css';

export default function Settings() {
  const params = useParams();
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
          <MenuCard pageName="Settings" />
        </div>
        <div className="content-card">
          <p>{params.id}</p>
        </div>
      </div>
    </div>
  );
}
