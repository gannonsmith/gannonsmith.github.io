import { useState, useEffect } from 'react';
import './Nav.css';

export default function Nav() {

  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [connect, setConnect] = useState(false);

  useEffect(() => {
  
  })

  function handleClick( id ) {
    switch (id) {
      case 'home_folder':
        setHome(!home);
        break;
      case 'about_folder':
        setAbout(!about);
        break;
      case 'portfolio_folder':
        setPortfolio(!portfolio);
        break;
      case 'connect_folder':
        setConnect(!connect);
        break;
      default:
        break;
    }
  }

  return (
    <div className='nav'>
      
      <img src={"/images/arv_photo.jpg"} id="portrait" alt="Gannon Smith"></img>
      <span id="logo">Gannon Smith</span>
      <br></br>
      <div>
        <ul className="folders">
          <li id="home_folder" className='folder' onClick={() => handleClick('home_folder')}> home</li>
          <ul className="subfolder" style={home ? {display: "block"}: {display: "none"}}>
            <li>elt</li>
          </ul>
          <li id="about_folder" className='folder' onClick={() => handleClick("about_folder")}> about</li>
          <ul className="subfolder" style={about ? {display: "block"}: {display: "none"}}>
            <li>elt</li>
          </ul>
          <li id="portfolio_folder" className='folder' onClick={() => handleClick("portfolio_folder")}> portfolio</li>
          <ul className="subfolder" style={portfolio ? {display: "block"}: {display: "none"}}>
            <li>elt</li>
          </ul>
          <li id="connect_folder" className='folder' onClick={() => handleClick("connect_folder")}> connect</li>
          <ul className="subfolder" style={connect ? {display: "block"}: {display: "none"}}>
            <li>elt</li>
            <li>elt</li>
          </ul>
        </ul>
      </div>
      
    </div>
  );
}
