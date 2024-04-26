import React from 'react';
import './style.css';
import logo from '../../images/logo.png';

export default function HomeButton() {
  return (
    <section class="logo-container">
      <img src={logo} alt="dragon outline" class="logo-img" />
      <h1 id="logo-title">How to Train Your ChatBot</h1>
    </section>
  );
}
