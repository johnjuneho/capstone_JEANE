import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
