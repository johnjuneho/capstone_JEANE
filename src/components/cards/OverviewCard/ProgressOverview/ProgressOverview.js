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
              <p className="text">Start</p>
            </div>
            <div className="rate-prog-label">
              <div className="rate-prog">
                <p className="text">Rate</p>
                <p className="text-2">Progress</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-container">
          <div className="row">
            <p className="text-3">Lesson 1</p>
            <p className="text-3">Feb 12</p>
            <div className="star-container">
              <img className="star" alt="Star" src={star} />
              <p className="text">4.8</p>
            </div>
            <ProgressBar />
          </div>
          <div className="row">
            <p className="text-3">Lesson 2</p>
            <p className="text-3">Feb 12</p>
            <div className="star-container">
              <img className="star" alt="Star" src={star} />
              <p className="text">4.7</p>
            </div>
            <ProgressBar />
          </div>
          <div className="row">
            <p className="text-3">Lesson 3</p>
            <p className="text-3">Feb 12</p>
            <div className="star-container">
              <img className="star" alt="Star" src={star} />
              <p className="text">5.0</p>
            </div>
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
}
