import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar1';

function App() {

  return (
  <Router>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

);}


export default App;