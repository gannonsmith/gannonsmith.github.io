"use client";

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-gray-950">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute w-[400px] h-[400px] bg-purple-500 rounded-full blur-3xl opacity-30 animate-blob" style={{ top: '20%', left: '10%' }} />
            <div className="absolute w-[400px] h-[400px] bg-fuchsia-500 rounded-full blur-3xl opacity-30 animate-blob" style={{ top: '50%', left: '60%', animationDelay: '2s' }} />
            <div className="absolute w-[400px] h-[400px] bg-blue-400 rounded-full blur-3xl opacity-25 animate-blob" style={{ top: '40%', left: '30%', animationDelay: '4s' }} />

        </div>



        

      {/* Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-4 text-purple-500"
      >
        <ReactTyped
          strings={["Gannon Smith"]}
          typeSpeed={100}
          backSpeed={50}
          loop={false}
          showCursor={false}
        />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl max-w-2xl mb-4 text-gray-300"
      >
        <ReactTyped
          strings={[
            "Building systems that think fast and scale smart.",
            "Pushing the limits of AI and hardware.",
            "Engineer. Researcher. Coffee enthusiast ☕",
          ]}
          typeSpeed={50}
          backSpeed={25}
          loop
        />
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 space-x-4"
      >
        <a
          href="#projects"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl text-white font-semibold shadow-md transition-all duration-300"
        >
          View My Work
        </a>
        <a
          href="/docs/Gannon_Smith_Resume.pdf"
          download
          className="border border-purple-500 px-6 py-3 rounded-xl text-purple-400 hover:bg-purple-800/30 transition"
        >
          Download Résumé
        </a>
      </motion.div>

      {/* Coffee Chat CTA */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="text-sm p-3 mt-4 text-purple-300 underline"
      >
        Want to grab a virtual coffee? ☕
      </motion.a>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-6 animate-bounce text-purple-400"
      >
        ↓
      </motion.div>
    </section>
  );
}
