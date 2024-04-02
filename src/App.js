import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeButton from './components/HomeButton/HomeButton';

function App() {
  return (
    <Router>
      <HomeButton />
    </Router>
  );
}

export default App;
