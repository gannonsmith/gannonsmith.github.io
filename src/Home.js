import './Home.css';

export default function Home() {

    return (
        <div className='home'>
            <div className='introduction'>
                <h1>Hello, my name is <span className='bigger'>Gannon Smith</span></h1>
                <h2>I'm a <span className='bigger'>Software Engineer</span></h2>
            </div>
            <div className='full-portrait-container'>
                <img id="full-portrait" src="images/arv_photo.jpg" alt="full portrait"></img>
            </div>
        </div>
    )
}