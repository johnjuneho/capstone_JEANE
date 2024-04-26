import React from 'react';
import './style.css';

export default function ExplainPopup({ message, closeModal }) {
  return (
    <div className="modal-container">
      <img
        className="dragon"
        src={require('../../../images/dragon.png')}
        alt="cartoon dragon"
      />
      <img
        className="bubble"
        src={require('../../../images/speechbubble.png')}
        alt="speech bubble"
      />
      <p className="explanation">{message}</p>
      <div>
        <button onClick={() => closeModal()}>X</button>
      </div>
    </div>
  );
}
