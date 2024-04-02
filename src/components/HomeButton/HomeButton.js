import React from 'react';
import './style.css';

export default function HomeButton() {
  return (
    <div>
      <img
        className="logo"
        alt="dragon outline"
        src="/images/logo.png" // Update the image path
      />
      <p>How to Train Your ChatBot</p>
    </div>
  );
}
