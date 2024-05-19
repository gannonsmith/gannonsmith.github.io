import './Home.css';

export default function Home() {

    return (
        <div className='home'>
            <div className='introduction'>
                <h1>My name is <span className='emphasis'>Gannon Smith</span></h1>
                <h3>And I'm a <span className='emphasis'>computer science student</span><br></br> with a passion for <span className='emphasis'>software engineering</span><br></br> and <span className='emphasis'>machine learning</span></h3>
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