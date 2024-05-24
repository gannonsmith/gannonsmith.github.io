import './About.css';

function TimelinePoint({image_path, image_alt, line_height, date, company, title, data}) {
    return (
        <div className='timeline-template'>
            <div className='timeline'>  
                <img className='company-logo' src={image_path} alt={image_alt}></img>
                <div style={{height: line_height}} className='timeline-line'></div>
            </div>
            <div className='degree-date'>{date}</div>
            <div className='degree-school'>{company}</div>
            <div className='degree-title'>{title}</div>
            <div className='degree-courses'>{data}</div>
        </div>
    )
}

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
                    <TimelinePoint 
                        image_path='/static/images/umichM.png' image_alt='michigan logo' line_height='80%' 
                        date='2021 - 2024' company='University of Michigan College of Engineering' 
                        title={<>Bachelor's of Science in Engineering,<br></br>Computer Science Engineering<br></br>Minor in Electrical Engineering</>} 
                        data={
                        <>Relevant Courses:<br></br>
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
                        </ul></>
                        }
                    />
                </div>
            </div>
            <div id='work-container'>
                <h1>Experience</h1>
                <div className='timeline-container'>
                    <TimelinePoint 
                        image_path='/static/images/pg-logo.jpg' image_alt='p&g logo' line_height='110%' 
                        date='May 2024 - Current' company='Procter & Gamble' 
                        title={<>GTO Database Engineering<br></br>Database Engineering Intern</>} 
                        data={
                        <ul class='outside-list'>
                            <li>Building Oracle entitlement tracking application to manage thousands of instances</li>
                        </ul>
                        }
                    />
                    <TimelinePoint 
                        image_path='/static/images/mhacks_logo.jpg' image_alt='mhacks logo' line_height='110%' 
                        date='Febuary 2024 - Current' company='MHacks' 
                        title={<>Tech Team</>} 
                        data={
                            <ul class='outside-list'>
                                <li>
                                    Built and organized Google x MHacks hackathon with 300+ hackers
                                </li>
                            </ul>
                        }
                    />
                    <TimelinePoint 
                        image_path='/static/images/michigan-cse-logo.jpg' image_alt='michigan cse logo' line_height='110%' 
                        date='September 2023 - Current' company='University of Michigan - CSE' 
                        title={<>Physical Computation Laboratory<br></br>Undergraduate Researcher</>} 
                        data={
                            <ul class='outside-list'>
                                <li>
                                    Conducted research in the Physical Computation Laboratory, exploring the intersection between race logic and linear temporal logic for system verification
                                </li>
                                <li>
                                    Analyzed the correctness and performance of using race logic as opposed to temporal logic for system specification
                                </li>
                            </ul>
                        }
                    />
                    <TimelinePoint 
                        image_path='/static/images/ford-logo.jpg' image_alt='ford logo' line_height='110%' 
                        date='May 2023 - July 2023' company='Ford Motor Company' 
                        title={<>Product Development<br></br>Connected Vehicle Software Intern</>} 
                        data={
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
                        }
                    />
                    <TimelinePoint 
                        image_path='/static/images/michigan-medicine-logo.png' image_alt='michigan medicine logo' line_height='70%' 
                        date='June 2022 - May 2023' company='Michigan Medicine' 
                        title={<>3D & Innovations Lab<br></br>Software Engineering Technician</>} 
                        data={
                            <ul class='outside-list'>
                                <li>
                                    Automated faculty evaluation report generation enabling a 98% reduction in labor time utilizing Python
                                </li>
                                <li>
                                Collaborated with faculty to determine functional requirements for Mi-TRAC achieving grant of $150,000
                                </li>
                            </ul>
                        }
                    />
                </div>
            </div>
        </div>
    );
}