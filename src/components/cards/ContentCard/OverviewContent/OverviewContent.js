/*
 * This component renders the a lesson slide that features and image, title, and paragraph.
 *
 * Props:
 * - cardContent: An object containing information about the slide content, including type, title, image, alt, and text.
 * - currSlide: The index of the current slide.
 * - totalLength: The total number of slides in the lesson.
 * - slideChange: A function to change the current slide.
 *
 * @param {Object} cardContent Information about the slide content.
 * @param {number} currSlide The index of the current slide.
 * @param {number} totalLength The total number of slides in the lesson.
 * @param {Function} slideChange Function to change the current slide.
 * @returns {JSX.Element} The rendered TextContent component.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import image from '../../../images/img13.jpg';

export default function OverviewContent() {
  const navigate = useNavigate();

  const lessonInfo = {
    title: 'Welcome to How to Train your ChatBot!',
    text: 'Welcome! In recent years, artificial intelligence has skyrocketed in popularity, revolutionizing how people access information. As students turn to social media to learn how to use platforms like ChatGPT, the need for improved digital literacy has never been clearer. Our website is here to provide training about using AI platforms responsibly and ethically. Over the course of three lessons, students will fly through the basics of AI, discover how to talk to it (prompt engineer), and explore the clouds of AI ethics. If you are ready to train your chatbot, click Begin to start! ',
  };

  return (
    <div className="overview-card">
      <div className="lesson-container">
        <h1 className="lesson-title">{lessonInfo.title}</h1>
        <img src={image} alt="Lesson Visual" className="lesson-image" />
        <p className="lesson-summary">{lessonInfo.text}</p>
        <button className="begin-button" onClick={() => navigate('/intro')}>
          <div className="begin-text">Begin</div>
        </button>
      </div>
    </div>
  );
}
