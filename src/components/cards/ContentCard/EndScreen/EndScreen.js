import React from 'react';
import './style.css';

export default function ExplainPopup({ message, lessonTitle }) {
  return (
    <div className="modal-container">
      <div className="speech-bubble">
        <img
          className="bubble"
          src={require('../../../images/speechbubble.png')}
          alt="speech bubble"
        />
        <div className="endMessage">
          <h2>{lessonTitle}</h2>
          <p className="explanation">{message}</p>
        </div>
      </div>
      <img
        className="dragon"
        src={require('../../../images/dragon.png')}
        alt="cartoon dragon"
      />
    </div>
  );
}
