import './App.css';
import Nav from './Nav'
import { useEffect, useState } from 'react';

function App() {
  const [nav, setNav] = useState(true);

  useEffect(() => {

  }, [nav])

  function openNav() {
    setNav(true)
  }

  function closeNav() {
    setNav(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        { nav &&
          <Nav />
        }
        <button onClick={openNav}>Open</button>
        <button onClick={closeNav}>Close</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
      
      </header>
    </div>
  );
}

export default App;
