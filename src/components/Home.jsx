import './Home.css';

function HomeBullet({text}) {
    return (
        <div className='homebullet'>
            <p>{text}</p>
        </div>
    )
}

export default function Home() {

    return (
        <div className='home'>
            <div className='introduction'>
                <h1>hey! i'm gannon.</h1>
                <h2>big <span className='emphasis'>tech</span> guy</h2>
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