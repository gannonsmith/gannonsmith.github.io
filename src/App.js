import './App.css';
import Nav from './Nav'

import { useState } from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Thoughts from './components/Thoughts';
import Bonus from './components/Bonus';


function App() {

  const [nav, setNav] = useState(true);


  return (
    <div className="App" id={nav ? "nav-visible" : "hidden"}>

          <BrowserRouter>
            <div className='nav-container' >
              <Nav />
            </div>

            <div className='main-container'>
              <div className='nav-toggle' onClick={() => setNav(prevNav => !prevNav)}>
                <img className='menu-icon' src='/static/images/bars-solid.svg' alt='menu toggle'/>
              </div>
              <Routes>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/thoughts' element={<Thoughts />} />
                <Route path='/bonus' element={<Bonus />} />
                
              </Routes>
            
            </div>

          </BrowserRouter>

      </div>
  );
}

export default App;
