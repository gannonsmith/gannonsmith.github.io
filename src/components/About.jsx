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
                    I'm a senior at the University of Michigan studying Computer Science Engineering and Electrical Engineering.
                    I'm currently looking for internship and full-time opportunities. Please reach out if you have any questions!
                </p>
            </div>
            <div id='education-container'>
                <h1>Education</h1>
                <div className='timeline-container'>
                    <div className='timeline-template'>
                        <div className='timeline'>  
                            <img className='company-logo' src="/static/images/umichM.png" alt="michigan logo"></img>
                            <div style={{height: "110%"}} className='timeline-line'></div>
                        </div>
                        <div className='degree-date'>
                            2021 - 2024
                        </div>
                        <div className='degree-school'>
                            University of Michigan College of Engineering
                        </div>
                        <div className='degree-title'>
                            Bachelor's of Science in Engineering,
                            <br></br>
                            Computer Science Engineering
                        </div>
                        <div className='degree-courses'>
                            Relevant Courses:<br></br>
                            <ul class='outside-list'>
                                <li>Advanced Operating Systems</li>
                                <li>Computer Architecture</li>
                                <li>Machine Learning</li>
                                <li>Web Systems</li>
                                <li>Artificial Intelligence</li>
                                <li>Computer Security</li>
                                <li>Computer Science Theory</li>
                                <li>Data Structures and Algorithms</li>
                                <li>Logic Design</li>
                            </ul>
                        </div>
                    </div>
                    <div className='timeline-template'>
                        <div className='timeline'>
                        <img className='company-logo' src="/static/images/umichM.png" alt="michigan logo"></img>
                            <div style={{height: "40%"}} className='timeline-line'></div>
                        </div>
                        <div className='degree-date'>
                            2021 - 2024
                        </div>
                        <div className='degree-school'>
                            University of Michigan College of Engineering
                        </div>
                        <div className='degree-title'>
                            Minor in Engineering,
                            <br></br>
                            Electrical Engineering
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
            <div id='work-container'>
                <h1>Experience</h1>
                <div className='timeline-container'>
                <div className='timeline-template'>
                        <div className='timeline'>
                            <img className='company-logo' src="/static/images/pg-logo.jpg" alt="p&g logo"></img>
                            <div style={{height: "110%"}} className='timeline-line'></div>
                        </div>
                        <div className='degree-date'>
                            May 2024 - Current
                        </div>
                        <div className='degree-school'>
                            Procter & Gamble
                        </div>
                        <div className='degree-title'>
                            IT
                            <br></br>
                            Platform Engineer Intern
                        </div>
                        <div className='degree-courses'>
                            <ul class='outside-list'>
                                <li>
                                    Ongoing
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='timeline-template'>
                        <div className='timeline'>
                            <img className='company-logo' src="/static/images/mhacks_logo.jpg" alt="mhacks logo"></img>
                            <div style={{height: "110%"}} className='timeline-line'></div>
                        </div>
                        <div className='degree-date'>
                            Febuary 2024 - Current
                        </div>
                        <div className='degree-school'>
                            MHacks
                        </div>
                        <div className='degree-title'>
                            Tech Team
                        </div>
                        <div className='degree-courses'>
                            <ul class='outside-list'>
                                <li>
                                    Built and organized Google x MHacks hackathon with 300+ hackers
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='timeline-template'>
                        <div className='timeline'>
                        <img className='company-logo' src="/static/images/michigan-cse-logo.jpg" alt="michigan cse logo"></img>
                            <div style={{height: "110%"}} className='timeline-line'></div>
                        </div>
                        <div className='degree-date'>
                            September 2023 - Current
                        </div>
                        <div className='degree-school'>
                            University of Michigan - CSE
                        </div>
                        <div className='degree-title'>
                            Physical Computation Laboratory
                            <br></br>
                            Undergraduate Researcher
                        </div>
                        <div className='degree-courses'>
                            <ul class='outside-list'>
                                <li>
                                    Conducted research in the Physical Computation Laboratory, exploring the intersection between race logic and linear temporal logic for system verification
                                </li>
                                <li>
                                    Analyzed the correctness and performance of using race logic as opposed to temporal logic for system specification
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='timeline-template'>
                        <div className='timeline'>
                            <img className='company-logo' src="/static/images/ford-logo.jpg" alt="ford logo"></img>
                            <div style={{height: "110%"}} className='timeline-line'></div>
                        </div>
                        <div className='degree-date'>
                            May 2023 - July 2023
                        </div>
                        <div className='degree-school'>
                            Ford Motor Company
                        </div>
                        <div className='degree-title'>
                            Product Development
                            <br></br>
                            Connected Vehicle Software Intern
                        </div>
                        <div className='degree-courses'>
                            <ul class='outside-list'>
                                <li>
                                    Developed real-time hysteresis loop counting algorithm in C reducing application's PCM memory use by 98.3%
                                </li>
                                <li>
                                    Demonstrated proof of concept for algorithm in Python, adding modifications to prove 100% correctness
                                </li>
                                <li>
                                    Created model using MATLAB/Simulink to test algorithm in parallel with other PCM components
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='timeline-template'>
                        <div className='timeline'>
                        <img className='company-logo' src="/static/images/michigan-medicine-logo.png" alt="michigan medicine logo"></img>
                            <div style={{height: "70%"}} className='timeline-line'></div>
                        </div>
                        <div className='degree-date'>
                            June 2022 - May 2023
                        </div>
                        <div className='degree-school'>
                            Michigan Medicine
                        </div>
                        <div className='degree-title'>
                            3D & Innovations Lab
                            <br></br>
                            Software Engineering Technician
                        </div>
                        <div className='degree-courses'>
                            <ul class='outside-list'>
                                <li>
                                    Automated faculty evaluation report generation enabling a 98% reduction in labor time utilizing Python
                                </li>
                                <li>
                                Collaborated with faculty to determine functional requirements for Mi-TRAC achieving grant of $150,000
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}