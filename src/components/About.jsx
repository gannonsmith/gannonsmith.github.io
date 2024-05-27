import { useState } from 'react';
import './About.css';

function Spacer() {
    return (
        <>
            <br></br>
            <div className='spacer-line'></div>
            <br></br>
        </>
    )
}

function Bullet({image_path, title, text}) {

    const [clicked, setClicked] = useState(false);
    const [mouseIn, setMouseIn] = useState(false);

    const handleMouseEnter = () => {
        setMouseIn(true);
    }

    const handleMouseLeave = () => {
        setMouseIn(false);
    }

    const handleClick = () => {
        if (clicked) {
            setClicked(false);
            setMouseIn(false);
        } else {
            setClicked(true);
        }
    }

    function isOpen() {
        return clicked || mouseIn;
    }

    const bulletStyle = {
        'width': isOpen() ? '800px' : '200px'
    }

    const infoStyle = {
        'transition': isOpen() ? '1s ease-in-out': '0.25s ease-in-out',
        'opacity': isOpen() ? '1.00' : '0.00'
    }

    return (
        <div
            className='bullet-container'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={bulletStyle}
        >
            <img src={image_path} className='bullet-img' alt='bullet point'></img>
            <div className='title-container' style={infoStyle}>
                <h3>{title}</h3>
            </div>
            <div className='text-container' style={infoStyle}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default function About() {

    return (
        <div className="about">
            <div className='about-header-container'>
                <h1>about me</h1>
                <div className='staggered-lines'>
                    <div className='top-line'></div>
                    <div className='bottom-line'></div>
                </div>
                
            </div>
            <div className='intro-container'>
                <h2>i'm gannon smith: <span className='purple'>computer science student</span></h2>
                <p>
                    i'm a senior at the University of Michigan studying computer science engineering and electrical engineering.
                    i'm currently looking for internship and full-time opportunities. please reach out if you have any questions!
                </p>
            </div>

            <div className='information-container'>
                <div className='title-container'>
                    <h1>Education</h1>
                </div>
                <Bullet
                    image_path='/static/images/umichM.png'
                    title='University of Michigan'
                    text={<>Computer Science Engineering,<br></br>Minor in Electrical Engineering</>}
                />
                <Spacer />
                <Bullet
                    image_path='/static/images/umichM.png'
                    title='Michigan Technological University'
                    text={<>Dual Enrollment</>}
                />
            </div>

            <div className='information-container'>
                <div className='title-container'>
                    <h1>Experience</h1>
                </div>
                <Bullet
                    image_path='/static/images/pg-logo.jpg'
                    title='Procter & Gamble'
                    text={<>Database Engineering Intern</>}
                />
                <Spacer />
                <Bullet
                    image_path='/static/images/ford-logo.jpg'
                    title='Ford Motor Company'
                    text={<>Connected Data Intern</>}
                />
                <Spacer />
                <Bullet
                    image_path='/static/images/michigan-medicine-logo.png'
                    title='Michigan Medicine'
                    text={<>Software Engineering Technician</>}
                />
            </div>
        </div>
    );
}