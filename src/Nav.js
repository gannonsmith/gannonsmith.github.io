import { useEffect } from 'react';
import './Nav.css';

const Nav = ({close}) => {

  useEffect(() => {
  
  })

  return (
    <div className="nav-body">
      
      <img src={"/images/arv_photo.jpg"} id="portrait" alt="Gannon Smith"></img>
      <br></br>
      <span id="logo">Gannon Smith</span>
      <button onClick={close} id="close_nav">Close</button>
    </div>
  );
}

export default Nav;
