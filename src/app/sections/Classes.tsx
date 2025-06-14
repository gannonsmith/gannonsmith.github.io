

export default function Classes() {
    const classes = [
        "Parallel Computer Architecture",
        "Design and Analysis of Algorithms",
        "Advanced Compilers",
        "Advanced Operating Systems",
        "Computer Architecture",
        "Machine Learning",
        "Web Systems",
        "Artificial Intelligence",
        "Computer Security",
        "Foundations of Computer Science",
        "Computer Organization",
        "Data Structures and Algorithms",
        "Programming and Data Structures",
        "Logic Design",
        "Electronic Circuits",
        "Discrete Mathematics",
    ];
    

    return (
        <>
        {/* Classes Section */}
            <section id="classes" className="py-20 px-6 md:px-20">
                <h2 className="text-3xl font-semibold mb-10 text-purple-400">Relevant Classes</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    {classes.map((cls, index) => (
                        <li key={index} className="bg-gray-800 rounded-xl p-4 shadow-md hover:bg-gray-700 transition-colors">
                            {cls}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}