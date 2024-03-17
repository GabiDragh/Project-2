import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  const current_theme = localStorage.getItem('cuurent_theme');

  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])
 
 
  return (
    <div className={'container ${theme}'}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App;