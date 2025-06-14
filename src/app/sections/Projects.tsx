import { useState } from "react";

export default function Projects() {

    const [filter, setFilter] = useState("all");
    
        const projects = [
            {
                title: "MHacks 2025",
                description: "Led the Tech Team for MHacks 2025, the largest hackathon in Michigan, overseeing a team of 8 developers to build the event's website and infrastructure.",
                link: "https://mhacks.org",
                image: "/projects/mhacks_25_landing.png",
                tags: ["web development", 'recent', 'backend']
            },
            {
                title: "Smith-Waterman Hardware Accelerator",
                description: "Achieved 30× speedup over SPOA using systolic array-based Verilog implementation.",
                link: "",
                image: "/projects/HAPI_arch.png",
                tags: ["hardware design", "systems", "algorithms", 'recent']
            },
            {
                title: "Jester",
                description: "Built a custom chess engine in C++ using minimax, alpha-beta pruning, and a polymorphic bitboard architecture.",
                link: "https://github.com/gannonsmith/jester",
                image: "/projects/chessboard.png",
                tags: ["algorithms", "AI", 'recent']
            },
            {
                title: "Bubble",
                description: "Led backend development for Bubble, a secure Life360-style app enabling real-time user tracking, encrypted messaging, and group coordination, built entirely in Rust using Axum.",
                link: "https://github.com/jbis9051/bubble",
                image: "/projects/bubble_logo.png",
                tags: ["backend"]
            },
            {
                title: "Out-of-Order RISC-V Processor",
                description: "Designed and synthesized an N-way superscalar out-of-order RISC-V processor with early branch resolution, speculative execution, and a GShare predictor.",
                link: "",
                image: "/projects/470_arch.png",
                tags: ["hardware design", "systems"]
            },
            {
                title: "LLM-powered Hot Path Identifier",
                description: "Developed a novel approach to identify performance bottlenecks in code using large language models.",
                link: "",
                image: "/projects/583_example.png",
                tags: ["AI", "algorithms", 'recent']
            },
            {
                title: "MHacks 2024",
                description: "Built the website and infrastructure for MHacks 2024, the largest hackathon in Michigan, as part of the Tech Team.",
                link: "https://mhacks-2024.mhacks.org/",
                image: "/projects/mhacks_2024_page.png",
                tags: ["web development", "backend"]
            },
            {
                title: "Ultrasound Parallelization",
                description: "Achieved 80x speedup to serial ultrasound algorithm using Xeon Phi and OpenMP.",
                link: "",
                image: "/projects/ultrasound.png",
                tags: ["algorithms"]
            },
            {
                title: "Google x MHacks",
                description: "Built the website and infrastructure for the MHacks x Google Hackathon, as part of the Tech Team.",
                link: "https://google-x-mhacks.mhacks.org/",
                image: "/projects/googlexmhacks.png",
                tags: ["web development", "backend"]
            },
            {
                title: "Virtual Memory Manager",
                description: "Created a virtual memory manager which supports both file backed and swap backed pages. Processes address spaces are maintained by the pager and syscalls are administered through the pager interface.",
                link: "",
                image: "/projects/vmm.png",
                tags: ["systems"]
            },
            {
                title: "Thread Manager",
                description: "Created a thread manager to administer the creation, lifetime, and execution of various thread bodies on a multi-core system.",
                link: "",
                image: "/projects/threads.png",
                tags: ["systems"]
            },
            {
                title: "Support Vector Machine Multiclass Classifier",
                description: "Developed a multiclass classifier using SVMs, mapping text reviews to a rating scale of 1-5.",
                link: "",
                image: "/projects/svm.png",
                tags: ["AI", "algorithms"]
            },
            {
                title: "Convolutional Neural Network Classifier",
                description: "Built a CNN image classifier to predict the landmark in images, achieving 83% accuracy on a test set of 2000 images of 8 landmarks.",
                link: "",
                image: "/projects/cnn.jpg",
                tags: ["AI", "algorithms"]
            }
        ];

    const filteredProjects = filter === "all" ? projects : projects.filter(p => p.tags.includes(filter));

    return (
        <>
        {/* Projects Section */}
            <section id="projects" className="py-20 px-6 md:px-20 bg-gray-900">
                <h2 className="text-3xl font-semibold mb-6 text-purple-400">Projects</h2>
                <div className="mb-6 space-x-4">
                {['all', 'recent', 'AI', 'hardware design', 'web development', 'algorithms', 'backend', 'systems'].map(tag => (
                    <button
                    key={tag}
                    className={`px-4 py-2 rounded-full border transition ${filter === tag ? 'bg-purple-600 text-white' : 'border-purple-400 text-purple-400 hover:bg-purple-800/30'}`}
                    onClick={() => setFilter(tag)}
                    >
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </button>
                ))}
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                {filteredProjects.map((project, i) => (
                    <div key={i} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-purple-500/40 transition-shadow">
                    <img src={project.image} alt={project.title} className="rounded mb-4 w-full h-48 object-cover" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                    {project.link !== "" ? (
                        <a href={project.link} target="_blank"className="text-purple-300 hover:underline text-sm mb-2 block">
                        View Project →
                    </a>
                    ) : (
                        <span className="text-gray-500 text-sm">Code Available upon request.</span>
                    )}
                    </div>
                ))}
                </div>
            </section>
        </>
    );
}