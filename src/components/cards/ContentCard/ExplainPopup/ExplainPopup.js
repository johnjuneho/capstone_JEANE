import React from 'react';
import './style.css';

export default function ExplainPopup({ message, closeModal }) {
  return (
    <div className="modal-container">
      <div className="x-close" onClick={() => closeModal()}>
        X
      </div>
      <div>
        <img
          className="bubble"
          src={require('../../../images/speechbubble.png')}
          alt="speech bubble"
        />
        <p className="explanation">{message}</p>
      </div>
      <img
        className="dragon"
        src={require('../../../images/dragon.png')}
        alt="cartoon dragon"
      />
    </div>
  );
}
