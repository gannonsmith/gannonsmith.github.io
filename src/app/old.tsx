"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import ExperienceCard from "./components/job_card";
import ProjectCard from "./components/project_card";
import ClassCard from "./components/class_card";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Home() {

  const [isComputer, setIsComputer] = useState(true);
  useEffect(() => {
    const handleResize = () =>
      window.innerWidth > 500 ? setIsComputer(true) : setIsComputer(false);
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [isComputer]);
  

  return (
    <main id="home" className="snap-y snap-proximity relative overflow-x-hidden overflow-y-scroll">
      <div className="flex flex-col w-screen">
        <div className="h-screen flex flex-col px-4 pt-8">
          <div className={isComputer ? "snap-start flex flex-row w-full" : "snap-start flex flex-col w-full items-center"}>
            <div className={isComputer ? "flex flex-col space-y-4 flex-wrap p-36 w-8/12" : "flex flex-col space-y-4 flex-wrap p-8 pt-32"}>
              <div className={isComputer ? "text-8xl" : "text-5xl"}>
                Gannon Smith.
              </div>
              <div className={isComputer ? "text-5xl text-violet-400" : "text-3xl text-violet-400"}>
                I build things.
              </div>
              <div className="text-2xl">
                <p>I&apos;m a computer science engineering student at the University of Michigan.</p>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/gannonsmith/" target="_blank">
                  <div className="flex space-x-1 px-1 py-0.5 rounded shadow-2xl border border-gray-600 justify-center items-center hover:cursor-pointer">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <p>LinkedIn</p>
                  </div>
                </a>
                <a href="https://github.com/gannonsmith" target="_blank">
                  <div className="flex space-x-1 px-1 py-0.5 rounded shadow-2xl border border-gray-600 justify-center items-center hover:cursor-pointer">
                    <FontAwesomeIcon icon={faGithub} />
                    <p>Github</p>
                  </div>
                </a>
                <a href="mailto:gannonsmithr@gmail.com">
                  <div className="flex space-x-1 px-1 py-0.5 rounded shadow-2xl border border-gray-600 justify-center items-center hover:cursor-pointer">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>Contact</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="shadow-2xl rounded-full border border-gray-800 hide-on-tablet"
                src="/images/maine_selfie.jpg"
                width={400}
                height={400}
                alt="selfie in acadia"
              />
            </div>
          </div>
        </div>

        <div id="experience" className="snap-start below-intro flex flex-col items-center space-y-6 p-10 pt-16">
          <div className="text-4xl">
            Experience
          </div>
          <div className="text-lg">
            A summary of my professional experience.
          </div>
          <div className="flex flex-wrap justify-center">
            <ExperienceCard
              title={"Software Engineering Intern"}
              company={"Michigan Medicine"}
              image={"/images/michigan_medicine_logo.jpg"}
              bullets={[]}
              skills={[]}
            />
            <ExperienceCard
              title={"Connected Data Software Intern"}
              company={"Ford Motor Company"}
              image={"/images/ford_logo.jpeg"}
              bullets={[]}
              skills={[]}
            />
            <ExperienceCard
              title={"Software Engineering Intern"}
              company={"Procter & Gamble"}
              image={"/images/p&g_logo.jpg"}
              bullets={[]}
              skills={[]}
            />
          </div>
        </div>

        <div id="projects" className="snap-start below-intro flex flex-col items-center space-y-6 p-10 pt-16">
          <div className="text-4xl">
            Projects
          </div>
          <div className="text-lg">
            <p>Some cool projects I&apos;ve worked on.</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <ProjectCard
              title={"Bubble"}
              link={"https://github.com/jbis9051/bubble"}
              image={"/images/bubble_logo.png"}
              description={"An open source, end to end encrypted location sharing app"}
              skills={"Rust, Postgres"}
            />
            <ProjectCard
              title={"Google x MHacks"}
              link={"https://www.mhacks.org/"}
              image={"/images/googlexmhacks.png"}
              description={"Hackathon with 300+ participants. Developed the website and judging process."}
              skills={"Web Development, Nextjs, Python"}
            />
            <ProjectCard
              title={"Jester"}
              link={"https://github.com/gannonsmith/jester"}
              image={"/images/chessboard.png"}
              description={"A chess engine."}
              skills={"C++, Game Theory, AB Pruning"}
            />
            <ProjectCard
              title={"MHacks 2024"}
              link={"https://www.mhacks.org/"}
              image={"/images/mhacks_2024_page.png"}
              description={"Hackathon with 800+ participants. Developed the website and judging process."}
              skills={"Web Development, Nextjs, Python"}
            />
          </div>
        </div>

        <div id="classes" className="snap-start pb-48 below-intro flex flex-col items-center space-y-6 p-10 pt-16">
          <div className="text-4xl">
            Classes
          </div>
          <div className="text-lg">
            <p>Some of the classes I&apos;ve taken.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                  <div>
                    <ClassCard 
                      code={'EECS 470'}
                      title={'Computer Architecture'}
                      description={'Out-of-order processors and speculation, memory hierarchies, branch prediction, virtual memory, cache design, multi-processors, and parallel processing including cache coherence and consistency. Designed an advanced (e.g. out-of-order, multi-core, SMT) processor using an HDL.'}
                      skills={['Verilog', 'Assembly']}
                    />
                  </div>
                  <div>
                    <ClassCard 
                      code={'EECS 370'}
                      title={'Computer Organization'}
                      description={'Core concepts of computer organization and hardware. Instructions executed by a processor and how to use these instructions in simple assembly-language programs. Data-path and control for multiple implementations of a processor. Performance evaluation, pipelining, caches, virtual memory, input/output.'}
                      skills={['C', 'Assembly']}
                    />
                  </div> 
                  <div>
                    <ClassCard 
                      code={'EECS 388'}
                      title={'Computer Security'}
                      description={'Principles and practices of computer security as applied to software, host systems, and networks. Covered building, using, and managing secure systems. Learned standard cryptographic functions and protocols, threats and defenses for real-world systems, include response, and computer forensics.'}
                      skills={['Python', 'SQL', 'C']}
                    />
                  </div>
              </div>
              <div className="grid gap-4">
                  <div>
                    <ClassCard 
                      code={'EECS 445'}
                      title={'Machine Learning'}
                      description={'Theory and implementation of state-of-the-art machine learning algorithms for large-scale real-world applications. Core concepts included supervised learning (regression, classification, kernel methods, neural networks, and regularization) and unsupervised learning (clustering, density estimation, and dimensionality reduction).'}
                      skills={['Python']}
                    />
                  </div>
                  <div>
                    <ClassCard 
                      code={'EECS 492'}
                      title={'Artificial Intelligence'}
                      description={'Fundamental concepts of AI, organized around building computational agents. Topics include search, logic, knowledge representation, reasoning, planning, decision making under the uncertainty, and machine learning.'}
                      skills={['Python']}
                    />
                  </div>
                  <div>
                    <ClassCard 
                      code={'EECS 281'}
                      title={'Data Structures and Algorithmns'}
                      description={'Algorithm analysis and O-notation; Fundamental data structures including lists, stacks, queues, priority queues, hash tables, binary trees, search trees, balanced, trees, and graphs; searching and sorting algorithms; recursive algorithms; basic graph algorithms; greedy algorithms and divide and conquer strategy.'}
                      skills={['C++']}
                    />
                  </div>
              </div>
              <div className="grid gap-4">
                  <div>
                    <ClassCard 
                      code={'EECS 485'}
                      title={'Web Systems'}
                      description={'Concepts surrounding web systems, applications, and internet scale distributed systems. Core concepts included client/server protocols, security, information retrieval and search engines, scalable data processing, and fault tolerant systems. I developed substantial projects involving development of web applications and web systems.'}
                      skills={['Python', 'HTML/CSS']}
                    />
                  </div>
                  <div>
                    <ClassCard 
                      code={'EECS 376'}
                      title={'Computer Science Theory'}
                      description={'Theory of computation. Models of computation: finite state machines, Turing machines. Decidable and undecidable problems. Polynomial time computability and paradigms of algorithm design. Computational complexity emphasizing NP-hardness. Coping with intractability. Exploiting intractability: cryptography.'}
                      skills={[]}
                    />
                  </div>
                  <div>
                    <ClassCard 
                      code={'EECS 280'}
                      title={'Computer Architecture'}
                      description={'Algorithm development and effective programming, top-down analysis, structured programming, testing, and program correctness. Program language syntax and static and runtime semantics. Scope, procedure instantiation, recursion, abstract data types, and parameter passing methods. Structured data types, pointers, linked data structures, stacks, queues, arrays, records, and trees.'}
                      skills={['C++']}
                    />
                  </div>
              </div>
              <div className="grid gap-4">
                  <div>
                    <ClassCard 
                      code={'EECS 482'}
                      title={'Operating Systems'}
                      description={'Operating system design and implementation: multi-tasking; concurrency and synchronization; inter-process communication; deadlock; scheduling; resource allocation; memory and storage management; input-output; file systems; protection and security. Wrote several substantial programs dealing with concurrency and synchronization in a multi-task environment, with file systems, and with memory management.'}
                      skills={['C++']}
                    />
                  </div>
                  <div>
                    <ClassCard 
                      code={'EECS 270'}
                      title={'Logic Design'}
                      description={'Boolean algebra, digital design techniques, logic gates, logic and state minimization, standard combinational circuits, latches and flip-flops, sequential circuits, synthesis of synchronous sequential circuits, state machines, FPGAs, memories, arithmetic circuits, and computer-aided design.'}
                      skills={['Verilog']}
                    />
                  </div>
                  <div>
                    <ClassCard 
                      code={'EECS 215'}
                      title={'Introduction to Circuits'}
                      description={"Basic Concepts of voltage and current; Kirchhoff's voltage and current laws; Ohm's law; voltage and current sources; Thevenin and Norton equivalent circuits; DC and low frequency active circuits using operational amplifiers, diodes, and transistors; small signal analysis; energy and power. Time-and frequency-domain analysis of RLC circuits. Basic passive and active electronic filters. Laboratory experience with electrical signals and circuits."}
                      skills={[]}
                    />
                  </div>
              </div>
          </div>

        </div>
        
      </div>
    </main>
  );
}
