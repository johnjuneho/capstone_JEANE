import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

import Home from './components/pages/home/Home';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
