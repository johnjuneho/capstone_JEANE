import React from 'react';
import image from '../../../images/text-content-placeholder.png';
import NextButtons from '../../NextButtons/NextButtons';
import './style.css';

export default function TextContent() {
  return (
    <div class="lesson-container">
      <img src={image} alt="A cartoon person training a dragon." />
      <div class="lesson-heading">
        <p>Objective 1: Asking Clearly</p>
        <div class="lesson-text-container">
          <div class="lesson-text">
            It’s important to learn how to ask ChatGPT in a way that gets us the
            answers we need without any mix-ups or wrong information. It's like
            playing a word game with a computer—we need to pick our words super
            carefully! As we have learned, large language modules predict the
            next words. We need to think like AI and choose our words carefully!
          </div>
        </div>
      </div>
      <NextButtons />
    </div>
  );
}
