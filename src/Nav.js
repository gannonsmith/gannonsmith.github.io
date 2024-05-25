import './Nav.css';
import { Link } from 'react-router-dom';

function Social({icon, link}) {

  return (
    <div className='icon-container'>
      <a href={link} class={icon} style={{color: "#9282F5"}} aria-label='social link' target='_blank' rel='noreferrer'></a>
    </div>
  )
}

function Panel({link}) {
  return (
    <div className='panel'>
      <Link to={'/'+link}>
        <div className='nav-link'>
          {link}
        </div>
      </Link>
    </div>
  )
}

export default function Nav() {
  
  return (
    <div className='nav'>

      <div className='portrait-container'>
        <Link to="/home">
          <img src={"/static/images/arv_photo.jpg"} className="portrait" alt="identicon"></img>
        </Link>
      </div>

      <div className='panel-container'>
        <Panel link='home' />
        <Panel link='about' />
        <Panel link='projects' />
        <Panel link='reviews' />
        <Panel link='thoughts' />
        <Panel link='etc' />
      </div>
      <div className='socials-container'>
        <Social icon='fa fa-envelope fa-xl' link='mailto:gannonsmithr@gmail.com' />
        <Social icon='fa fa-linkedin fa-xl' link='https://www.linkedin.com/in/gannonsmith/' />
        <Social icon='fa fa-github fa-xl' link='https://github.com/gannonsmith' />
        <Social icon='fa fa-instagram fa-xl' link='https://www.instagram.com/gannon.smith_/' />
      </div>
    </div>
  );
}
