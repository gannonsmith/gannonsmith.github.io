"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ExperienceCard from "./components/job_card";
import ProjectCard from "./components/project_card";
import ClassCard from "./components/class_card";


export default function Home() {

  const [isComputer, setIsComputer] = useState(true);
  useEffect(() => {
    const handleResize = () =>
      window.innerWidth > 500 ? setIsComputer(true) : setIsComputer(false);
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [isComputer]);

  return (
    <div>
      <header>
        <div className="bg-zinc-800 text-white flex flex-row justify-between w-screen p-2 fixed top-0 z-50 border-b-1 border-black">
          <div>
            <div className="text-2xl">
              Gannon Smith
            </div>
          </div>
          <div className="flex flex-row space-x-8 justify-between pr-10">
            <div className="text-xl">
              <a href="#home">Home</a>
            </div>
            <div className="text-xl">
              <a href="#experience">Experience</a>
            </div>
            <div className="text-xl">
              <a href="#projects">Projects</a>
            </div>
            <div className="text-xl">
              <a href="#classes">Classes</a>
            </div>
          </div>
        </div>
      </header>
      <main id="home" className="relative pb-16 overflow-x-hidden">
        <div className="flex flex-col w-screen">
          <div className="w-screen border-b-2 border-black" style={isComputer ? {position: 'relative', width: '100%', height: '300px'} : {position: 'relative', width: '100%', height: '100px'}}>
            <Image
              src="/images/acadia_pan.png"
              fill
              objectFit="cover"
              alt="panorama of acadia"
            />
          </div>

          <div className={isComputer ? "flex flex-row w-full justify-center px-4" : "flex flex-col w-full items-center px-4"}>
            <div className="flex flex-col space-y-4 flex-wrap p-6">
              <div className="text-4xl">
                Hey, I'm Gannon
              </div>
              <div className="text-lg">
                I'm a student at the University of Michigan studying Computer Science Engineering.
              </div>
              <div className="text-lg">
                More information about me.
              </div>
              <div className="flex space-x-4">
                <div className="flex px-1 py-0.5 rounded shadow-2xl border border-gray-600 justify-center items-center">
                  <div className="text-xl w-8 bg-purple-100 flex justify-center items-center mx-auto">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <p>Github</p>
                </div>
                <div className="flex px-1 py-0.5 rounded shadow-2xl border border-gray-600">
                  Linkedin
                </div>
                <div className="flex px-1 py-0.5 rounded shadow-2xl border border-gray-600">
                  Twitter
                </div>
              </div>
            </div>
            <div className={isComputer ? "relative bottom-32" : ""}>
              <Image
                className="shadow-2xl rounded-3xl border-2 border-black hide-on-tablet"
                src="/images/maine_selfie.jpg"
                width={isComputer ? 400 : 200}
                height={isComputer ? 400 : 200}
                alt="selfie in acadia"
              />
            </div>
          </div>

          <div className="h-64"></div>

          <div id="experience" className="below-intro flex flex-col items-center space-y-6 p-10 pt-16">
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

          <div id="projects" className="below-intro flex flex-col items-center space-y-6 p-10 pt-16">
            <div className="text-4xl">
              Projects
            </div>
            <div className="text-lg">
              Some cool projects I've worked on.
            </div>
            <div className="flex flex-wrap justify-center">
              <ProjectCard
                title={"Bubble"}
                image={"/images/bubble_logo.png"}
                description={"Location Sharing App"}
                skills={"Rust, Postgres"}
              />
              <ProjectCard
                title={"Google x MHacks"}
                image={"/images/googlexmhacks.png"}
                description={"Hackathon with 300+ participants. Developed the website and judging process."}
                skills={"Web Development, Nextjs, Python"}
              />
              <ProjectCard
                title={"Jester"}
                image={"/images/chessboard.png"}
                description={"A chess engine."}
                skills={"C++, Game Theory, AB Pruning"}
              />
              <ProjectCard
                title={"MHacks 2024"}
                image={"/images/mhacks_2024_page.png"}
                description={"Hackathon with 800+ participants. Developed the website and judging process."}
                skills={"Web Development, Nextjs, Python"}
              />
            </div>
          </div>

          <div id="classes" className="below-intro flex flex-col items-center space-y-6 p-10 pt-16">
            <div className="text-4xl">
              Classes
            </div>
            <div className="text-lg">
              The classes I've taken.
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                      <ClassCard 
                        code={'EECS 470'}
                        title={'Computer Architecture'}
                        description={'verilog galore'}
                        skills={['Verilog', 'C++']}
                      />
                    </div>
                    <div>
                      <ClassCard 
                        code={'EECS 482'}
                        title={'Operating Systems'}
                        description={'verilog galore'}
                        skills={['Verilog']}
                      />
                    </div>
                    <div>
                      <ClassCard 
                        code={'EECS 388'}
                        title={'Computer Security'}
                        description={'verilog galore'}
                        skills={['Verilog']}
                      />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                      <ClassCard 
                        code={'EECS 445'}
                        title={'Machine Learning'}
                        description={'verilog galore'}
                        skills={['Verilog']}
                      />
                    </div>
                    <div>
                      <ClassCard 
                        code={'EECS 492'}
                        title={'Artificial Intelligence'}
                        description={'verilog galore'}
                        skills={['Verilog']}
                      />
                    </div>
                    <div>
                      <ClassCard 
                        code={'EECS 281'}
                        title={'Data Structures and Algorithmns'}
                        description={'verilog galore'}
                        skills={['Verilog']}
                      />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                      <ClassCard 
                        code={'EECS 485'}
                        title={'Web Systems'}
                        description={'verilog galore'}
                        skills={['Flask', 'Web Development']}
                      />
                    </div>
                    <div>
                      <ClassCard 
                        code={'EECS 376'}
                        title={'Computer Science Theory'}
                        description={'verilog galore'}
                        skills={['Verilog']}
                      />
                    </div>
                    <div>
                      <ClassCard 
                        code={'EECS 280'}
                        title={'Computer Architecture'}
                        description={'verilog galore'}
                        skills={['Verilog']}
                      />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                      <ClassCard 
                        code={'EECS 370'}
                        title={'Computer Organization'}
                        description={'verilog galore'}
                        skills={['Verilog']}
                      />
                    </div>
                    <div>
                      <ClassCard 
                        code={'EECS 270'}
                        title={'Logic Design'}
                        description={'verilog galore'}
                        skills={['Verilog']}
                      />
                    </div>
                    <div>
                      <ClassCard 
                        code={'EECS 215'}
                        title={'Introduction to Circuits'}
                        description={'verilog galore'}
                        skills={['Verilog']}
                      />
                    </div>
                </div>
            </div>

          </div>
          
        </div>
      </main>
    </div>
  );
}
