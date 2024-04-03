import React from 'react';
import { Link } from 'react-router-dom';
import { PaperPage } from '../icons/PaperPage';
import { File } from '../icons/File';
import { GameControl } from '../icons/GameControl';
import { SignOut } from '../icons/SignOut';
import './style.css';

export default function HomeButton() {
  return (
    <div className="menu-card">
      <div className="outline">
        <p>MENU</p>
        <div className="nav">
          <Link to="/homeu47dashboard">
            <div>
              <img
                className="icon"
                alt="window outline"
                src="https://c.animaapp.com/0v6OgNX0/img/vuesax-bold-element-3@2x.png"
              />
              <div>
                <p className="label">Overview</p>
              </div>
            </div>
          </Link>
          <Link to="/homeu47dashboard">
            <div>
              <div>
                <File className="icon" />
                <div>
                  <p className="label">Lessons</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/homeu47dashboard">
            <div>
              <div>
                <div>
                  <PaperPage className="icon" />
                  <div>
                    <p className="label">Quizzes</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/homeu47dashboard">
            <div>
              <div>
                <GameControl />
                <div>
                  <p className="label">Games</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/homeu47dashboard">
            <div>
              <div>
                <img
                  className="icon"
                  alt="Setting line"
                  src="https://c.animaapp.com/0v6OgNX0/img/setting-line.svg"
                />
                <div>
                  <p className="label">Settings</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <Link to="/homeu47dashboard">
          <div className="sign-out">
            <div>
              <SignOut className="sign-out-icon" />
              <p className="sign-out-label">Log out</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
