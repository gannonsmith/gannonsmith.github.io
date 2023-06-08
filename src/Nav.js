import { useEffect } from 'react';
import './Nav.css';

const Nav = ({close}) => {

  useEffect(() => {
  
  })

  return (
    <div className="nav-body">
      <span id="logo">Gannon Smith</span>
      <button onClick={close} id="close_nav">Close</button>
    </div>
  );
}

export default Nav;
