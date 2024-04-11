import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Lesson1 from './components/pages/lesson-1/Lesson1';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
