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
            <div id='education-container'>
                <h1>Education</h1>
                <div className='timeline-container'>
                    <div className='timeline-template'>
                        <div className='timeline'>
                            <div className='timeline-dot'></div>
                            <div style={{height: "110%"}} className='timeline-line'></div>
                        </div>
                        <div className='degree-date'>
                            2021 - 2025
                        </div>
                        <div className='degree-school'>
                            University of Michigan College of Engineering
                        </div>
                        <div className='degree-title'>
                            Bachelor's of Science in Engineering,
                            <br></br>
                            Computer Science Engineering
                            <br></br>
                            GPA: 3.77
                        </div>
                        <div className='degree-courses'>
                            Relevant Courses:<br></br>
                            <ul class='outside-list'>
                                <li>Machine Learning (EECS 445)</li>
                                <li>Web Systems (EECS 485)</li>
                                <li>Foundations of Computer Science (EECS 376)</li>
                                <li>Computer Organization (EECS 370)</li>
                                <li>Data Structures and Algorithms (EECS 281)</li>
                                <li>Discrete Mathematics (EECS 203)</li>
                                <li>Programming and Data Structures (EECS 280)</li>
                                <li>Computational Linear Algebra</li>
                                <li>Calculus I - IV</li>
                            </ul>
                        </div>
                    </div>
                    <div className='timeline-template'>
                        <div className='timeline'>
                            <div className='timeline-dot'></div>
                            <div style={{height: "90%"}} className='timeline-line'></div>
                        </div>
                        <div className='degree-date'>
                            2021 - 2025
                        </div>
                        <div className='degree-school'>
                            University of Michigan College of Engineering
                        </div>
                        <div className='degree-title'>
                            Minor in Engineering,
                            <br></br>
                            Electrical Engineering
                            <br></br>
                            GPA: 3.90
                        </div>
                        <div className='degree-courses'>
                            Relevant Courses:<br></br>
                            <ul class='outside-list'>
                                <li>Computer Organization (EECS 370)</li>
                                <li>Logic Design (EECS 270)</li>
                                <li>Electronic Circuits (EECS 215)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id='work-container'>
                <h1>Experience</h1>
                <div className='timeline-container'>
                    <div className='timeline-template'>
                        <div className='timeline'>
                            <div className='timeline-dot'></div>
                            <div style={{height: "110%"}} className='timeline-line'></div>
                        </div>
                        <div className='degree-date'>
                            May 2023 - July 2023
                        </div>
                        <div className='degree-school'>
                            Ford Motor Company
                        </div>
                        <div className='degree-title'>
                            Model E Product Development
                            <br></br>
                            Connected Vehicle Software Intern
                        </div>
                        <div className='degree-courses'>
                            <ul class='outside-list'>
                                <li>
                                    Rainflow Algorithm: Researched and designed a real-time hysteresis loop counting algorithm in C to condense a
                                    complicated load history from transmission torque into meaningful histograms for validation of consumer vehicle use.
                                    Resulted in an efficient program on-board the Powertrain
                                </li>
                                <li>
                                    Algorithm Validation: Developed proof of concept for real-time adaptation of post-processing rainflow algorithm in
                                    Python and compared various inputs and outputs, adding custom implementation of peak-valley filtering. Resulted in a
                                    new modified algorithm that correctly identifies cycles.
                                </li>
                                <li>
                                    Testing: Designed model using MATLAB, Simulink, and Ford testing framework SWIFT to test algorithm in a realistic
                                    vehicle environment in parallel with other PCM components. Resulted in verification of functioning components and
                                    functioning system as a whole when simulated with real vehicle data.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='timeline-template'>
                        <div className='timeline'>
                            <div className='timeline-dot'></div>
                            <div style={{height: "110%"}} className='timeline-line'></div>
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
                                    Automated Faculty Evaluation: Designed and developed Python application to automatically generate general and
                                    annual reports for instructor evaluation based on data from thousands of forms in various databases. Resulted in a
                                    streamlined process for generating and circulating reports based on department, name, or event.
                                </li>
                                <li>
                                    Mi-TRAC: Collaborated with doctors and other professionals to discuss design and functional requirements for Michigan
                                    Tool for Resident Assessment of Competencies (Mi-TRAC). Resulted in initial project grant and extension of funding
                                    pending proof-of-concept.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='timeline-template'>
                        <div className='timeline'>
                            <div className='timeline-dot'></div>
                            <div style={{height: "90%"}} className='timeline-line'></div>
                        </div>
                        <div className='degree-date'>
                            September 2022 - Current
                        </div>
                        <div className='degree-school'>
                            Tamarack Tower
                        </div>
                        <div className='degree-title'>
                            Web Developer and Server Administrator
                        </div>
                        <div className='degree-courses'>
                            <ul class='outside-list'>
                                <li>
                                    Maintained web pages for nonprofit organization that promotes education by awarding scholarships to students
                                </li>
                                <li>
                                    Developed an automated email system using cron and JavaScript to notify administrators of donations and provide weekly
                                    summaries
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}