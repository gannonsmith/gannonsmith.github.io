import { useState } from 'react';
import './About.css';

export default function About() {

    const [class485, setClass485] = useState(false);
    const [class370, setClass370] = useState(false);

    return (
        <div className="about">
            <div className='about-header-container'>
                <h1>About</h1>
            </div>
            <div className='education-container'>
                <div className='education-header'>
                    <span className='purple'>Education</span>
                </div>
                <div className='education-grid-container'>
                    <div className='education-logo-container'>
                        <img id='umich-logo' src="/static/images/Michigan_Wolverines_logo.svg" alt='michigan wolverines block M'></img>
                    </div>
                    <div className='education-info'>
                        <div className='info-date'>
                            <div className='info-container'>
                                <span id='uofm'>University of Michigan</span>
                            </div>
                            <div className='date-container'>
                                2021 - 2025
                            </div>
                        </div>
                        College of Engineering<br></br>
                        Bachelor of Science in Computer Science Engineering<br></br>
                        3.75 GPA 
                    </div>
                    <div className='education-classes'>
                        <h2>Classes</h2>
                        <ul id='classes'>
                            <li className='class'>
                                <div className='class-name' onClick={() => setClass485(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Web Systems <span className='purple'>(EECS 485)</span>
                                        </div>
                                        <div className='date-container'>
                                            Winter 2023
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class485 ? {}: {display: "none"}}>
                                Concepts surrounding web systems, applications, and internet scale distributed systems. Topics covered include client/server protocols, security, information retrieval and search engines, scalable data processing, and fault tolerant systems.<br></br>
                                    Technologies used: Javascript, React, HTML, CSS, SQL
                                </div>
                                <div className='class-projects' style={class485 ? {}: {display: "none"}}>
                                    <div className='class-project'>
                                        Static Webpage
                                    </div>
                                    <div className='class-project'>
                                        Serverside Webpage
                                    </div>
                                    <div className='class-project'>
                                        Clientside Webpage
                                    </div>
                                    <div className='class-project'>
                                        MapReduce Program
                                    </div>
                                    <div className='class-project'>
                                        Search Engine
                                    </div>
                                </div>
                            </li>
                            <li className='class'>
                                <div className='class-name' onClick={() => setClass370(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Computer Organization <span className='purple'>(EECS 370)</span>
                                        </div>
                                        <div className='date-container'>
                                            Winter 2023
                                        </div>
                                    </div>
                                </div>

                                <div className='class-desc' style={class370 ? {}: {display: "none"}}>
                                Basic concepts of computer organization and hardware. Instructions executed by a processor and how to use these instructions in simple assembly-language programs. Stored-program concept. Data-path and control for multiple implementations of a processor. Performance evaluation, pipelining, caches, virtual memory, input/output.<br></br>    Technologies used: Javascript, React, HTML, CSS, SQL
                                </div>
                                <div className='class-projects' style={class370 ? {}: {display: "none"}}>
                                    <div className='class-project'>
                                        Assembler
                                    </div>
                                    <div className='class-project'>
                                        Pipeline Simulator
                                    </div>
                                    <div className='class-project'>
                                        Linker
                                    </div>
                                    <div className='class-project'>
                                        Cache Simulator
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='work-container'>
                <h3>Work</h3>
            </div>
        </div>
    );
}