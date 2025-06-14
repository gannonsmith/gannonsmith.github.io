
export default function Education() {
  return (
    <>
    {/* Education Section */}
      <section id="education" className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-10 text-purple-400">Education</h2>
        <div className="grid gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-md flex gap-4 items-center">
            <img src="/logos/block_m-hex.png" alt="School Logo" className="w-20 h-14" />
            <div>
              <h3 className="text-xl font-semibold">University of Michigan – MSE in Computer Science Engineering</h3>
              <p className="text-sm text-gray-400">Jan 2024 - Dec 2025</p>
              <p className="text-sm text-gray-400">GPA: 3.7</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-md flex gap-4 items-center">
            <img src="/logos/block_m-hex.png" alt="School Logo" className="w-20 h-14" />
            <div>
              <h3 className="text-xl font-semibold">University of Michigan – BSE in Computer Science Engineering</h3>
              <p className="text-sm text-gray-400">Minor in Electrical Engineering</p>
              <p className="text-sm text-gray-400">Aug 2021 - Dec 2024</p>
              <p className="text-sm text-gray-400">GPA: 3.8</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}