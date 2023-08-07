import './About.css';

export default function About() {

    return (
        <div className="about">
            <div className='about-header-container'>
                <h1>
                    About Me
                    <br></br>
                    <div className='staggered-lines'>
                        <div className='top-line'></div>
                        <div className='bottom-line'></div>
                    </div>
                </h1>
                
            </div>
            <div className='intro-container'>
                <h2>I'm Gannon Smith: <span className='purple'>Software Engineer</span></h2>
                <p>
                    I'm a junior at the University of Michigan studying Computer Science Engineering and Electrical Engineering.
                    I'm currently looking for internship and research opportunities. Please reach out if you have any questions!
                </p>
            </div>
            <div className='work-container'>
                <h1>Work</h1>
                <div className='timeline-container'>
                    
                </div>
            </div>
            <div className='education-container'>
                <h1>Education</h1>
            </div>
        </div>
    );
}