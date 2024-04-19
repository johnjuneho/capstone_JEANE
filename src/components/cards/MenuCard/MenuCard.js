import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Settings } from '../../icons/Settings.js';
import { SettingsFill } from '../../icons/Settings-Fill.js';
import { Lesson } from '../../icons/Lesson.js';
import { LessonFill } from '../../icons/Lesson-Fill.js';
import { Star } from '../../icons/Star.js';
import { StarFill } from '../../icons/Star-Fill.js';
import { Overview } from '../../icons/Dashboard.js';
import { OverviewFill } from '../../icons/Dashboard-Fill.js';
import './style.css';
import routes from '../../../Routes.js';

/**
 * Menu card with navigation links.
 *
 * @param {string} pageName - The name of the current active page.
 *
 * @returns {JSX.Element} The MenuCard component.
 */
export default function MenuCard({ pageName }) {
  return (
    <div className="outer-frame">
      <div className="inner-frame">
        <div className="menu-card">
          <div className="menu-outline">
            <div className="nav-title">
              <p>MENU</p>
            </div>
            <section className="nav">
              {routes.map((route, index) => (
                <NavLink key={index} to={route.path} className="nav-row">
                  {addIcon(route.className, pageName)}
                  <div className="text-container">
                    <div className="text-label">
                      <p>{route.className.substring(0).replace(/-/gi, ' ')}</p>
                    </div>
                  </div>
                </NavLink>
              ))}
              <Outlet />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Function to add icons based on the page name and route class name.
 *
 * @param {string} className - The class name of the route.
 * @param {string} pageName - The name of the current active page.
 *
 * @returns {JSX.Element} The icon component.
 */
function addIcon(className, pageName) {
  switch (className) {
    case 'Lesson-1':
    case 'Lesson-2':
    case 'Lesson-3':
      if (pageName === className) {
        return <LessonFill />;
      } else {
        return <Lesson />;
      }
    case 'Overview':
      if (pageName === className) {
        return <OverviewFill />;
      } else {
        return <Overview />;
      }
    case 'Settings':
      if (pageName === className) {
        return <SettingsFill />;
      } else {
        return <Settings />;
      }
    case 'Introduction':
      if (pageName === className) {
        return <StarFill />;
      } else {
        return <Star />;
      }
    default:
      return null;
  }
}
