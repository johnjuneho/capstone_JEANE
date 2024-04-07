import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/home/Home';
import ProgressOverview from './components/cards/OverviewCard/ProgressOverview/ProgressOverview';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
