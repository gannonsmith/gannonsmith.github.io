"use client";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Classes from "./components/Classes";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
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

