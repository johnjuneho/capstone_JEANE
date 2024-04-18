import React from 'react';
import image from '../../../images/text-content-placeholder.png';
import './style.css';

export default function TextContent() {
  return (
    <div class="lesson-img">
      <img src={image} alt="A cartoon person training a dragon." />
      <div class="lesson-heading">
        <p>Objective 1: Asking Clearly</p>
        <div class="lesson-container">
          <div class="lesson-text">
            It’s important to learn how to ask ChatGPT in a way that gets us the
            answers we need without any mix-ups or wrong information. It's like
            playing a word game with a computer—we need to pick our words super
            carefully! As we have learned, large language modules predict the
            next words. We need to think like AI and choose our words carefully!
          </div>
          <button className="next-button">
            <div className="frame">
              <div className="text-wrapper">Next</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
