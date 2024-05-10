// import React from 'react';
// import ProgressOverview from './ProgressOverview/ProgressOverview';
// import profile from '../../../images/profilepic.png';
// import './style.css';

// export default function OverviewContent() {
//   return (
//     <div className="overview-card">
//       <div className="outline">
//         <section className="outline-frame">
//           <div className="profile">
//             <div className="group">
//               <div className="overlap-group">
//                 <div className="profile-outline" />
//                 <img className="img" alt="Ellipse" src={profile} />
//               </div>
//             </div>
//             <div className="name">
//               <p className="name-label">Sarah Yu</p>
//               <p className="grade-label">7th Grade Student</p>
//             </div>
//           </div>
//         </section>
//         <section className="progress">
//           <p className="progress-overview">Progress Overview</p>
//           <ProgressOverview />
//         </section>
//       </div>
//     </div>
//   );
// }

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
import image from '../../../images/img13.jpg'

export default function OverviewContent() {
  const navigate = useNavigate();
  
  const lessonInfo = {
    title: "Welcome to How to Train your ChatBot!",
    text: "Welcome to our app! As young users increasingly encounter artificial intelligence through social media, the need for proper digital literacy has never been clearer. Our application is designed to equip students with the knowledge and skills to use AI platforms like ChatGPT responsibly and ethically. Through a series of engaging, gamified lessons, students will explore essential topics such as the basics of AI, prompt engineering, and the ethics of digital interactions. Click Begin to start! "
  };

  return (
    <div className="overview-card">
      <div className="lesson-container">
        <h1 className="lesson-title">{lessonInfo.title}</h1>
        <img src={image} alt="Lesson Visual" className="lesson-image"/>
        <p className="lesson-summary">{lessonInfo.text}</p>
        <button className="begin-button" onClick={() => navigate('/intro')}>
          <div className="begin-text">
            Begin
          </div>
        </button>
    </div>
    </div>
  );
}


