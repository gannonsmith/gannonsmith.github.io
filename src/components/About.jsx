import { useState } from 'react';
import './About.css';

export default function About() {

    const [class485, setClass485] = useState(false);
    const [class370, setClass370] = useState(false);
    const [class270, setClass270] = useState(false);
    const [class101, setClass101] = useState(false);
    const [class281, setClass281] = useState(false);
    const [class215, setClass215] = useState(false);
    const [class240, setClass240] = useState(false);
    const [class280, setClass280] = useState(false);
    const [class203, setClass203] = useState(false);
    const [class216, setClass216] = useState(false);
    const [classmath215, setClassMath215] = useState(false);
    const [class140, setClass140] = useState(false);
    const [class100, setClass100] = useState(false);

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
                                            Web Systems <span className='class-number'>(EECS 485)</span>
                                        </div>
                                        <div className='date-container'>
                                            Winter 2023
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class485 ? {}: {display: "none"}}>
                                Concepts surrounding web systems, applications, and internet scale distributed systems. Topics covered include client/server protocols, security, information retrieval and search engines, scalable data processing, and fault tolerant systems.<br></br>
                                Javascript, React, HTML, CSS, SQL
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
                                            Computer Organization <span className='class-number'>(EECS 370)</span>
                                        </div>
                                        <div className='date-container'>
                                            Winter 2023
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class370 ? {}: {display: "none"}}>
                                Basic concepts of computer organization and hardware. Instructions executed by a processor and how to use these instructions in simple assembly-language programs. Stored-program concept. Data-path and control for multiple implementations of a processor. Performance evaluation, pipelining, caches, virtual memory, input/output.<br></br>
                                C
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
                            <li className='class'>
                                <div className='class-name' onClick={() => setClass270(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Logic Design <span className='class-number'>(EECS 270)</span>
                                        </div>
                                        <div className='date-container'>
                                            Winter 2023
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class270 ? {}: {display: "none"}}>
                                Boolean algebra, digital design techniques, logic gates, logic and state minimization, standard combinational circuits, latches and flip-flops, sequential circuits, synthesis of synchronous sequential circuits, state machines, FPGAs, memories, arithmetic circuits, and computer-aided design. Laboratory involves CAD-based design implemented on a FPGA including elementary interfacing.
                                Verilog
                                </div>
                                <div className='class-projects' style={class270 ? {}: {display: "none"}}>
                                    <div className='class-project'>
                                        Selector
                                    </div>
                                    <div className='class-project'>
                                        Robot Control
                                    </div>
                                    <div className='class-project'>
                                        Combinational Calculator
                                    </div>
                                    <div className='class-project'>
                                        2-Bit Saturating Counter
                                    </div>
                                    <div className='class-project'>
                                        Four-Function Calculator
                                    </div>
                                </div>
                            </li>
                            <li className='class'>
                                <div className='class-name' onClick={() => setClass101(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Computational Linear Algebra <span className='class-number'>(ROB 101)</span>
                                        </div>
                                        <div className='date-container'>
                                            Winter 2023
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class101 ? {}: {display: "none"}}>
                                Boolean algebra, digital design techniques, logic gates, logic and state minimization, standard combinational circuits, latches and flip-flops, sequential circuits, synthesis of synchronous sequential circuits, state machines, FPGAs, memories, arithmetic circuits, and computer-aided design. Laboratory involves CAD-based design implemented on a FPGA including elementary interfacing. <br></br>
                                Julia
                                </div>
                                <div className='class-projects' style={class101 ? {}: {display: "none"}}>
                                    <div className='class-project'>
                                        Map Building from LiDAR Data
                                    </div>
                                    <div className='class-project'>
                                        Regression: Precipitation in Alaska
                                    </div>
                                    <div className='class-project'>
                                        Optimization Meets Segway
                                    </div>
                                </div>
                            </li>
                            <li className='class'>
                                <div className='class-name' onClick={() => setClass281(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Data Structures and Algorithms <span className='class-number'>(EECS 281)</span>
                                        </div>
                                        <div className='date-container'>
                                            Fall 2022
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class281 ? {}: {display: "none"}}>
                                Introduction to the algorithm analysis and O-notation; Fundamental data structures including lists, stacks, queues, priority queues, hash tables, binary trees, search trees, balanced, trees, and graphs; searching and sorting algorithms; recursive algorithms; basic graph algorithms; introduction to greedy algorithms and divide and conquer strategy. <br></br>
                                C++
                                </div>
                                <div className='class-projects' style={class281 ? {}: {display: "none"}}>
                                    <div className='class-project'>
                                        SuperMarco
                                    </div>
                                    <div className='class-project'>
                                        Zombie Tower Defense
                                    </div>
                                    <div className='class-project'>
                                        Database Query Language
                                    </div>
                                    <div className='class-project'>
                                        Among Us - TSP
                                    </div>
                                </div>
                            </li>
                            <li className='class'>
                                <div className='class-name' onClick={() => setClass215(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Electronic Circuits <span className='class-number'>(EECS 215)</span>
                                        </div>
                                        <div className='date-container'>
                                            Fall 2022
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class215 ? {}: {display: "none"}}>
                                Basic Concepts of voltage and current; Kirchhoff's voltage and current laws; Ohm's law; voltage and current sources; Thevenin and Norton equivalent circuits; DC and low frequency active circuits using operational amplifiers, diodes, and transistors; small signal analysis; energy and power. Time-and frequency-domain analysis of RLC circuits. Basic passive and active electronic filters.
                                </div>
                                <div className='class-projects' style={class215 ? {}: {display: "none"}}>
                                    <div className='class-project'>
                                        R-2R Digital to Analaog Converter (DAC)
                                    </div>
                                    <div className='class-project'>
                                        MOSFET Audio Amplifier
                                    </div>
                                    <div className='class-project'>
                                        Op-Amps
                                    </div>
                                    <div className='class-project'>
                                        First and Second Order Circuits
                                    </div>
                                    <div className='class-project'>
                                        Active Filters
                                    </div>
                                </div>
                            </li>
                            <li className='class'>
                                <div className='class-name' onClick={() => setClass240(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Physics: Electricity and Magnetism <span className='class-number'>(PHYSICS 240)</span>
                                        </div>
                                        <div className='date-container'>
                                            Fall 2022
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class240 ? {}: {display: "none"}}>
                                Covers topics in electricity and magnetism: charge, Coulomb's law, electric fields Gauss' law, electric potential, capacitors and dielectrics, current and resistance, EMF and circuits, magnetic fields, Biot-Savart law, Amperes law, Faraday's Law of Induction, and simple AC circuits. <br></br>
                                <br></br>
                                </div>
                            </li>
                            <li className='class'>
                                <div className='class-name' onClick={() => setClass280(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Programming and Data Structures <span className='class-number'>(EECS 280)</span>
                                        </div>
                                        <div className='date-container'>
                                            Winter 2022
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class280 ? {}: {display: "none"}}>
                                Algorithm development and effective programming, top-down analysis, structured programming, testing, and program correctness. Program language syntax and static and runtime semantics. Scope, procedure instantiation, recursion, abstract data types, and parameter passing methods. Structured data types, pointers, linked data structures, stacks, queues, arrays, records, and trees. <br></br>
                                C++
                                </div>
                                <div className='class-projects' style={class280 ? {}: {display: "none"}}>
                                    <div className='class-project'>
                                        Statistics
                                    </div>
                                    <div className='class-project'>
                                        Smart Image Shrinking
                                    </div>
                                    <div className='class-project'>
                                        Euchre
                                    </div>
                                    <div className='class-project'>
                                        Linked List
                                    </div>
                                    <div className='class-project'>
                                        Discussion Post Classifier
                                    </div>
                                </div>
                            </li>
                            <li className='class'>
                                <div className='class-name' onClick={() => setClass203(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Discrete Math <span className='class-number'>(EECS 203)</span>
                                        </div>
                                        <div className='date-container'>
                                            Winter 2022
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class203 ? {}: {display: "none"}}>
                                Introduction to the mathematical foundations of computer science. Topics covered include: prepositional and predicate logic, set theory, function and relations, growth of functions and asymptotic notation, introduction to algorithms, elementary combinatorics, and graph theory, and discrete probability theory.<br></br>
                                <br></br>
                                </div>
                            </li>
                            <li className='class'>
                                <div className='class-name' onClick={() => setClass216(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Differential Equations <span className='class-number'>(MATH 216)</span>
                                        </div>
                                        <div className='date-container'>
                                            Winter 2022
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class216 ? {}: {display: "none"}}>
                                Topics covered include some material on complex numbers and matrix algebra, first and second order linear and non-linear systems with applications, introductory numerical methods, and elementary Laplace transform techniques.<br></br>
                                <br></br>
                                </div>
                            </li>
                            <li className='class'>
                                <div className='class-name' onClick={() => setClassMath215(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Multivariable Calculus <span className='class-number'>(MATH 215)</span>
                                        </div>
                                        <div className='date-container'>
                                            Fall 2021
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={classmath215? {}: {display: "none"}}>
                                Topics include vector algebra and vector functions; analytic geometry of planes, surfaces and solids; functions of several variables and partial differentiation; line, surface, and volume integrals and applications; vector fields and integration; Green's Theorem, Stokes' Theorem, and Gauss's Theorem.<br></br>
                                <br></br>
                                </div>
                            </li>
                            <li className='class'>
                                <div className='class-name' onClick={() => setClass140(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Physics: Mechanics <span className='class-number'>(PHYSICS 140)</span>
                                        </div>
                                        <div className='date-container'>
                                            Fall 2021
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class140? {}: {display: "none"}}>
                                Topics include: vectors, linear motion, projectiles, relative velocity, circular motion, Newton's laws, particle dynamics, work and energy, linear momentum, torque, angular momentum, gravitation, planetary motion, fluid statics and dynamics, simple harmonic motion, waves and sound.<br></br>
                                <br></br>
                                </div>
                            </li>
                            <li className='class'>
                                <div className='class-name' onClick={() => setClass100(prev => !prev)}>
                                    <div className='info-date'>
                                        <div className='info-container'>
                                            Intro Engineering <span className='class-number'>(ENGR 100)</span>
                                        </div>
                                        <div className='date-container'>
                                            Fall 2021
                                        </div>
                                    </div>
                                </div>
                                <div className='class-desc' style={class100? {}: {display: "none"}}>
                                Focused team projects dealing with technical, economic, safety, environmental, and social aspects of a real-world engineering problem. Written, oral, and visual communication required within the engineering profession; reporting on the team engineering projects. The role of the engineer in society; engineering ethics. Organization and skills for effective teams.<br></br>
                                <br></br>
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