import './App.css';
import Nav from './Nav'
import { useEffect, useState } from 'react';

function App() {
  const [nav, setNav] = useState(true);

  useEffect(() => {
    document.getElementById("open_nav").addEventListener("click", openNav);
    document.getElementById("close_nav").addEventListener("click", closeNav);
  
  })

  function openNav() {
    setNav(true)
  }

  function closeNav() {
    setNav(false)
  }

  return (
    <div className="App">

      <div id="nav" className={nav ? "visible" : ""}>
        <Nav close={closeNav}/>
      </div>

      <button id="open_nav">Open</button>

      <div id="main">
        Main Content
      </div>
      
    </div>
  );
}



export default App;
