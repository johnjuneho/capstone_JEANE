/**
 * This component renders the logo and title for the home page of the application.
 * It imports the logo image and displays it alongside the title "How to Train Your ChatBot".
 * @returns {JSX.Element} The rendered HomeLogo component.
 */

import React from 'react';
import './style.css';
import logo from '../../images/logo.png';

export default function HomeLogo() {
  return (
    <section className="logo-container">
      <img src={logo} alt="dragon outline" className="logo-img" />
      <h1 id="logo-title">How to Train Your ChatBot</h1>
    </section>
  );
}
