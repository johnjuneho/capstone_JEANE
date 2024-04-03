import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
/*
import HomeButton from './components/HomeButton/HomeButton';
import MenuCard from './components/MenuCard/MenuCard';
*/
import Home from './components/pages/home/Home';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
