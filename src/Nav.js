import { useState } from 'react';
import './Nav.css';

export default function Nav() {

  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [connect, setConnect] = useState(false);

  
  return (
    <div className='nav'>
      
      <img src={"/images/arv_photo.jpg"} id="portrait" alt="Gannon Smith"></img>
      <span id="logo">Gannon Smith</span>
      <br></br>
      <div>
        <ul className="folders">
          <li id="home_folder" className='folder' onClick={() => setHome(prevHome => !prevHome)}> home</li>
          <ul className="subfolder" style={home ? {display: "block"}: {display: "none"}}>
            <li>elt</li>
          </ul>
          <li id="about_folder" className='folder' onClick={() => setAbout(prevAbout => !prevAbout)}> about</li>
          <ul className="subfolder" style={about ? {display: "block"}: {display: "none"}}>
            <li>elt</li>
          </ul>
          <li id="portfolio_folder" className='folder' onClick={() => setPortfolio(prevPortfolio => !prevPortfolio)}> portfolio</li>
          <ul className="subfolder" style={portfolio ? {display: "block"}: {display: "none"}}>
            <li>elt</li>
          </ul>
          <li id="connect_folder" className='folder' onClick={() => setConnect(prevConnect => !prevConnect)}> connect</li>
          <ul className="subfolder" style={connect ? {display: "block"}: {display: "none"}}>
            <li>elt</li>
            <li>elt</li>
          </ul>
        </ul>
      </div>
      
    </div>
  );
}
