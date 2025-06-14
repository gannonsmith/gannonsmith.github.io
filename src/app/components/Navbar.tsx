

export default function Navbar() {
    const showBlog = false; // Set to true to show blog section
  return (
    <>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50 px-4 py-2 flex justify-center space-x-6 text-sm md:text-base">
            <a href="#experience" className="hover:text-purple-400">Experience</a>
            <a href="#projects" className="hover:text-purple-400">Projects</a>
            <a href="#classes" className="hover:text-purple-400">Classes</a>
            <a href="#education" className="hover:text-purple-400">Education</a>
            {showBlog && <a href="#blog" className="hover:text-purple-400">Blog</a>}
            <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
    </>
  );
}