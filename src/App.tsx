import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import GetInTouch from './pages/GetInTouch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}

export default App;