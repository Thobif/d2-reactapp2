
import React from 'react';

import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Navbar from  './pages/Navbar';



function App() {
  return (
   <Router>
     <div>
      <Navbar />
        <Switch>


        <Route exact path="/">
          <Home />
        </Route>

    <Route path="/home"> 
      <Home />
      </Route>

      <Route path="/about">
      <About />
   </Route>

    <Route path="/contact">
      <Contact />
      </Route>

      <Route path="/profile">
      <Profile />
      </Route>

      </Switch>
      </div>
    
    
   </Router>
  );
}

export default App;
