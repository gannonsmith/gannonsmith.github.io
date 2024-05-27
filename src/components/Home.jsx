import './Home.css';

import { useState, useEffect } from 'react';

function HomeBullet({text}) {
    return (
        <div className='homebullet'>
            <p>{text}</p>
        </div>
    )
}

function RotatingText({text_list}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % text_list.length);
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [text_list.length]);

    return (
        <>{text_list[currentIndex]}</>
    );
}

export default function Home() {
    const labels = [
        'tech', 
        'ml', 
        'hackathon',
        'cs',
        'swe',
        'data',
        'agi'
    ];
    
    return (
        <div className='home'>
            <div className='introduction'>
                <h1>hey! i'm gannon.</h1>
                <h2>big <span className='rotating-label'><RotatingText text_list={labels}/></span> guy</h2>
            </div>
            <div className='small-talk'>
                <HomeBullet text="i'm a software engineer/computer scientist pursuing a bachelor's degree in computer science engineering at the university of michigan." />
                <HomeBullet text="i entered college with the intention of becoming a computer engineer but fell in love with algorithms, computer systems, machine learning, graph theory and all of the ways they overlap to build cool things." />
                <HomeBullet text="my current interests lie in machine learning, algorithms, web systems, and computer architecture. outside of cse and ece, i'm also interested in economics, physics, and math." />
                <HomeBullet text="outside of the classroom i'm a lifter, technophile, gamer, hacker, and tourist." />
                <HomeBullet text="this summer i'm:" />
                <ul>
                    <li>interning at procter & gamble in cincinnati, global technical operations database engineering</li>
                    <li>building the most hype hackathon ever (mhacks17)</li>
                    <li>filling out this website</li>
                </ul>
            </div>
        </div>
    )
}