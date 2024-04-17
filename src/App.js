import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Intro from './components/pages/intro/Intro';
import Lesson1 from './components/pages/lesson-1/Lesson1';
import Lesson2 from './components/pages/lesson-2/Lesson2';
import Lesson3 from './components/pages/lesson-3/Lesson3';
import Settings from './components/pages/settings/Settings';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intro/:id" element={<Intro />} />
      <Route path="/lesson1/:id" element={<Lesson1 />} />
      <Route path="/lesson2/:id" element={<Lesson2 />} />
      <Route path="/lesson3/:id" element={<Lesson3 />} />
      <Route path="/settings/:id" element={<Settings />} />
    </Routes>
  );
}
