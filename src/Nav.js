import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  
  return (
    <div className='nav'>

      <div className='portrait-container'>
        <Link to="/home">
          <img src={"/static/images/arv_photo.jpg"} className="portrait" alt="Gannon Smith"></img>
        </Link>
      </div>

      <div className='logo-container'>
        <span id="logo">Gannon Smith</span><br></br>
      </div>

      <div className='panel-container'>
        <div className='panel'>
          <Link to={"./home"}>
            <div className='nav-link'>
              Home
            </div>
          </Link>
        </div>
        <div className='panel'>
            <Link to={"./about"}>
              <div className='nav-link'>
                About
              </div>
            </Link>
        </div>
        <div className='panel'>
            <Link to={"./projects"}>
              <div className='nav-link'>
              Projects
              </div>
            </Link>
        </div>
        <div className='panel'>
            <Link to={"./connect"}>
              <div className='nav-link'>
                Connect
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
