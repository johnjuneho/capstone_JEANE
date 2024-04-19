import React from 'react';
import './style.css';

export default function HomeButton() {
  return (
    <section className="btn-nav">
      <button className="back-button">
        <p className="next-text">Back</p>
      </button>
      <button className="next-button">
        <p className="next-text">Next</p>
      </button>
    </section>
  );
}
