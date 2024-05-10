import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Intro from './components/pages/intro/Intro';
import Lesson1 from './components/pages/lesson-1/Lesson1';
import Lesson2 from './components/pages/lesson-2/Lesson2';
import Lesson3 from './components/pages/lesson-3/Lesson3';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/lesson1" element={<Lesson1 />} />
      <Route path="/lesson2" element={<Lesson2 />} />
      <Route path="/lesson3" element={<Lesson3 />} />
    </Routes>
  );
}
