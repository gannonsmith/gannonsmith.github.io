import './App.css';
import Nav from './Nav'
import Home from './Home'
import { useState } from 'react';

function App() {

  const [nav, setNav] = useState(true);


  return (
    <div className="App" id={nav ? "nav-visible" : "hidden"}>

      <div className='nav-container' >
        <Nav />
      </div>

    
      <div className='main-container'>
        <div className='nav-toggle' onClick={() => setNav(prevNav => !prevNav)}>
          <img className='menu-icon' src='/static/images/bars-solid.svg' alt='menu toggle'/>
        </div>

        <Home />
      </div>

    </div>
  );
}

export default App;
