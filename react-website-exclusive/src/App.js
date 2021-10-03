import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home'

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
