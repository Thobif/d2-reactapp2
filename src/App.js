
import React from 'react';

import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Navbar from  './pages/Navbar';



function App() {
  return (
   <Router>
     <div className="container-fluid">  
     <Navbar />
      <Home />
      <About />
      <Contact />
      <Profile />
    

     </div>
   </Router>
  );
}

export default App;
