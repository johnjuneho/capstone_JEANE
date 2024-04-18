import React from 'react';
import './style.css';
import logo from '../../images/logo.png';

export default function HomeButton() {
  return (
    <div class="logo-container">
      <img src={logo} alt="dragon outline" class="logo-img" />
      <p id="logo-title">How to Train Your ChatBot</p>
    </div>
  );
}
