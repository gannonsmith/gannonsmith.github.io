import { useState } from 'react';
import './Nav.css';
import { Link  } from 'react-router-dom';

export default function Nav() {

  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [connect, setConnect] = useState(false);

  
  return (
    <div className='nav'>
      
      
      <div className='portrait-container'>
        <Link to="/home">
          <img src={"/static/images/arv_photo.jpg"} className="portrait" alt="Gannon Smith"></img>
          </Link>
      </div>

      <div className='logo-container'>
        <span id="logo">Gannon Smith</span>
      </div>
      
      <div className='folder-container'>
        <ul className="folders">
          <li id="home_folder" className='folder' onClick={() => setHome(prevHome => !prevHome)}> home</li>
          <ul className="subfolder" style={home ? {display: "block"}: {display: "none"}}>
            <Link to={"./home"}>
              <li className='page-link'>Home</li>
            </Link>

          </ul>
          <li id="about_folder" className='folder' onClick={() => setAbout(prevAbout => !prevAbout)}> about</li>
          <ul className="subfolder" style={about ? {display: "block"}: {display: "none"}}>
            <Link to={"./about"}>
              <li className='page-link'>About</li>
            </Link>
          </ul>
          <li id="portfolio_folder" className='folder' onClick={() => setPortfolio(prevPortfolio => !prevPortfolio)}> portfolio</li>
          <ul className="subfolder" style={portfolio ? {display: "block"}: {display: "none"}}>
            <Link to={"./portfolio"}>
              <li className='page-link'>Portfolio</li>
            </Link>
          </ul>
          <li id="connect_folder" className='folder' onClick={() => setConnect(prevConnect => !prevConnect)}> connect</li>
          <ul className="subfolder" style={connect ? {display: "block"}: {display: "none"}}>
            <Link to={"./connect"}>
              <li className='page-link'>Top</li>
            </Link>
            <Link to={"./connect"}>
              <li className='page-link'>Bottom</li>
            </Link>
          </ul>
        </ul>
      </div>
      
    </div>
  );
}
