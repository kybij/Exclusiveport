import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home'
import Projects from './components/Projects';
import Contact from './components/contact';
import Footer from './components/footer';
import PortfolioContainer from './components/PortfolioContainer.js';
function App() {
  return (
    

    <div>
      <PortfolioContainer />
      <Footer />
      </div>
  
  );
}

export default App;
