"use client";

import Landing from "./sections/Landing";
import Navbar from "./sections/Navbar";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Classes from "./sections/Classes";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import { getAllPosts } from "./lib/posts";
import { get } from "http";

export default function Portfolio() {
  const showBlog = false; // Set to true to show blog section

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <Landing />
      <Navbar />
      <Experience />
      <Projects />
      <Classes />
      <Education />
      {showBlog && <Blog />}
      <Contact />
    </div>
  );
}

