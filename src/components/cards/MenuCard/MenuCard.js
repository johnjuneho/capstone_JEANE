import React from 'react';
import { Link } from 'react-router-dom';
import { Settings } from '../../icons/Settings.js';
import { SettingsFill } from '../../icons/Settings-Fill.js';
import { Lesson } from '../../icons/Lesson.js';
import { LessonFill } from '../../icons/Lesson-Fill.js';
import { Star } from '../../icons/Star.js';
import { StarFill } from '../../icons/Star-Fill.js';
import { Dashboard } from '../../icons/Dashboard.js';
import { DashboardFill } from '../../icons/Dashboard-Fill.js';
import './style.css';

export default function MenuCard() {
  return (
    <div class="outer-frame">
      <div class="inner-frame">
        <div class="menu-card">
          <div class="outline">
            <div class="nav-title">
              <p>MENU</p>
            </div>
            <section class="nav">
              <Link path="" class="nav-row">
                <Dashboard />
                <div class="text-container">
                  <div class="text-label">
                    <p>Overview</p>
                  </div>
                </div>
              </Link>
              `
              <Link path="" class="nav-row">
                <Star />
                <div class="text-container">
                  <div class="text-label">
                    <p>Introduction</p>
                  </div>
                </div>
              </Link>
              <Link path="/lesson-1" class="nav-row">
                <Lesson />
                <div class="text-container">
                  <div class="text-label">
                    <p>Lesson 1</p>
                  </div>
                </div>
              </Link>
              <Link path="" class="nav-row">
                <Lesson />
                <div class="text-container">
                  <div class="text-label">
                    <p>Lesson 2</p>
                  </div>
                </div>
              </Link>
              <Link path="" class="nav-row">
                <Lesson />
                <div class="text-container">
                  <div class="text-label">
                    <p>Lesson 3</p>
                  </div>
                </div>
              </Link>
              <Link path="" class="nav-row">
                <Settings />
                <div class="text-container">
                  <div class="text-label">
                    <p>Settings</p>
                  </div>
                </div>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
