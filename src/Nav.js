import { useEffect } from 'react';
import './Nav.css';

function Nav(close_fxn) {

  useEffect(() => {
    document.getElementById("close_nav").addEventListener("click", close_fxn)

  })

  return (
    <div className="nav-body">
      <span>Nav</span>
      <button id="close_nav">Close</button>
    </div>
  );
}

export default Nav;
