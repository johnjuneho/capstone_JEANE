import ProgressBar from '../ProgressBar/ProgressBar';
import star from '../../../images/star.png';
import React from 'react';
import './style.css';

export default function ProgressOverview() {
  return (
    <div className="border">
      <div className="border-1">
        <div className="border-2">
          <div className="text">Course name</div>
          <div className="prog-col-name">
            <div className="start-label">
              <div className="text">Start</div>
            </div>
            <div className="rate-prog-label">
              <div className="rate-prog">
                <div className="text">Rate</div>
                <div className="text-2">Progress</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-container">
          <div className="row">
            <div className="text-3">Prompt Engineering</div>
            <div className="text-3">Feb 12</div>
            <div className="star-container">
              <img className="star" alt="Star" src={star} />
              <div className="text">4.8</div>
            </div>
            <ProgressBar />
          </div>
          <div className="row">
            <div className="text-3">Prompt Engineering</div>
            <div className="text-3">Feb 12</div>
            <div className="star-container">
              <img className="star" alt="Star" src={star} />
              <div className="text">4.7</div>
            </div>
            <ProgressBar />
          </div>
          <div className="row">
            <div className="text-3">Prompt Engineering</div>
            <div className="text-3">Feb 12</div>
            <div className="star-container">
              <img className="star" alt="Star" src={star} />
              <div className="text">5.0</div>
            </div>
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
}
