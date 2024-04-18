import React from 'react';
import ProgressOverview from './ProgressOverview/ProgressOverview';
import profile from '../../../images/profilepic.png';
import './style.css';

export default function OverviewContent() {
  return (
    <div className="overview-card">
      <div className="outline">
        <section className="outline-frame">
          <div className="profile">
            <div className="group">
              <div className="overlap-group">
                <div className="profile-outline" />
                <img className="img" alt="Ellipse" src={profile} />
              </div>
            </div>
            <div className="name">
              <p className="name-label">Sarah Yu</p>
              <p className="grade-label">7th Grade Student</p>
            </div>
          </div>
        </section>
        <section className="progress">
          <p className="progress-overview">Progress Overview</p>
          <ProgressOverview />
        </section>
      </div>
    </div>
  );
}
