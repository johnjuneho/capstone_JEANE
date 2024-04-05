import React from 'react';
import './style.css';
// TODO: fix this and make it responsive
export default function ProgressBar() {
  return (
    <div className="container">
      <div className="section section-1">
        <div
          style={{
            width: '61.5px',
            height: '12px',
            position: 'relative',
            background: '#FFAE4E',
          }}
        />
      </div>
      <div className="section section-2"></div>
      <div className="section section-3"></div>
      <div className="section section-4"></div>
    </div>
  );
}
