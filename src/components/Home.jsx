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
        'nlp',
        'cs',
        'database',
        'swe',
        'cloud',
        'linux',
        'umich'
    ];
    
    return (
        <div className='home'>
            <div className='introduction'>
                <h1>hey! i'm gannon.</h1>
                <h2>big <span className='rotating-label'><RotatingText text_list={labels}/></span> guy</h2>
            </div>
            <div className='small-talk'>
                <HomeBullet text="i'm a computer science student" />
                <HomeBullet text="i entered college as a CE student" />
                <HomeBullet text="i have a passion for machine learning and ai" />
                <HomeBullet text="some things i like to do are" />
                <HomeBullet text="currently i am interning at procter & gamble in cincinnati" />
            </div>
        </div>
    )
}