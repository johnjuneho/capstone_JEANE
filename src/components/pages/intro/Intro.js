import React from 'react';
import { useParams } from 'react-router-dom';
import HomeButton from '../../cards/HomeButton/HomeButton';
import MenuCard from '../../cards/MenuCard/MenuCard';
import TextContent from '../../cards/ContentCard/TextContent/TextContent';
import '../../../App.css';

export default function Intro() {
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
          <MenuCard pageName="Introduction" />
        </div>
        <div className="content-card">
          <TextContent />
        </div>
      </div>
    </div>
  );
}
