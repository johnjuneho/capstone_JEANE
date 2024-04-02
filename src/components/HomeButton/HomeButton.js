import React from 'react';
import './style.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function HomeButton() {
  return (
    <Link to="/home">
      <button>
        <div>
          <img src={logo} alt="dragon outline" />
          <p>How to Train Your ChatBot</p>
        </div>
      </button>
    </Link>
  );
}
