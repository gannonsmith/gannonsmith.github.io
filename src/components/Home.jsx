import './Home.css';

export default function Home() {

    return (
        <div className='home'>
            <div className='introduction'>
                <h1>Hello, my name is <span className='emphasis'>Gannon Smith</span></h1>
                <h3>I'm a <span className='emphasis'>Software Engineer</span> with experience in Backend and Frontend Development, Machine Learning, Computer Architecture, and Computer Science Research</h3>
            </div>
            <div className='full-portrait-container'>
                <img id="full-portrait" src="/static/images/prof_headshot.JPG" alt="full portrait"></img>
            </div>
            <div className='download-resume'>
                <a href="/static/docs/Gannon_Smith.pdf" target='_blank'>
                    <div className='download-container'>
                        <h4>Download Resume</h4>
                    </div>
                </a>
            </div>
        </div>
    )
}