import React from 'react';
import { Settings } from '../../icons/Settings.js';
import { Lesson } from '../../icons/Lesson.js';
import { SignOut } from '../../icons/SignOut.js';
import { Star } from '../../icons/Star.js';
import { Dashboard } from '../../icons/Dashboard.js';
import './style.css';

export default function MenuCard() {
  return (
    <div class="outer-frame">
      <div class="inner-frame">
        <div class="menu-card">
          <div class="outline">
            <div class="title">
              <p>MENU</p>
            </div>
            <section class="nav">
              <div class="row">
                <Dashboard class="icon" />
                <div class="text-container">
                  <div class="text-label">
                    <p>Overview</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <Star class="icon" />
                <div class="text-container">
                  <div class="text-label">
                    <p>Introduction</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <Lesson class="icon" />
                <div class="text-container">
                  <div class="text-label">
                    <p>Lesson 1</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <Lesson class="icon" />
                <div class="text-container">
                  <div class="text-label">
                    <p>Lesson 2</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <Lesson class="icon" />
                <div class="text-container">
                  <div class="text-label">
                    <p>Lesson 3</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <SignOut class="icon" />
                <div class="text-container">
                  <div class="text-label">
                    <p>Settings</p>
                  </div>
                </div>
              </div>
            </section>
            <div class="row">
              <SignOut class="sign-out-icon" />
              <div class="log-out-text">
                <p>Log out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
