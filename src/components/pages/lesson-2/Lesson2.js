import React from 'react';
import { useParams } from 'react-router-dom';
import HomeButton from '../../cards/HomeButton/HomeButton';
import MenuCard from '../../cards/MenuCard/MenuCard';
import './style.css';

export default function Lesson2() {
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
          <p>{params.id}</p>
        </div>
      </div>
    </div>
  );
}
