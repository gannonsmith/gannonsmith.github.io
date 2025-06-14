
export default function Experience() {
  return (
    <>
    {/* Experience Section */}
      <section id="experience" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-purple-400">Work Experience</h2>
        <div className="grid gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex gap-4 items-center">
            <img src="/logos/p&g_logo.jpg" alt="Company Logo" className="w-20 h-20 rounded" />
            <div>
              <h3 className="text-xl font-semibold">Software Engineering Intern – Procter & Gamble</h3>
              <p className="text-sm text-gray-400 mb-2">May 2025 – Aug 2025</p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Sole developer of an automated QA system integrated into P\&G’s artwork labeling pipeline, performing multi-source validation of inputs and outputs using API-fed enums, regex, and GPT-based models to catch data anomalies across thousands of global product rules.</li>
                <li>Designed and implemented an OCR solution to extend P\&G’s automated artwork compliance system, enabling detection of multilingual and variably structured text in smart PDFs previously missed by rule-based methods.</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex gap-4 items-center">
            <img src="/logos/p&g_logo.jpg" alt="Company Logo" className="w-20 h-20 rounded" />
            <div>
              <h3 className="text-xl font-semibold">Database Engineering Intern – Procter & Gamble</h3>
              <p className="text-sm text-gray-400 mb-2">May 2024 – Aug 2024</p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Developed and deployed a Python-based reporting pipeline for hundreds of Oracle DB instances, eliminating \$5M+ in daily licensing cost fluctuations and saving 400+ FTE hours annually by automating license and feature usage monitoring.</li>
                <li>Integrated and cleaned daily telemetry from Oracle Enterprise Manager and DB instances using Azure Edge Functions and Postgres, driving a dashboard that enabled license compliance and anomaly detection at scale.</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex gap-4 items-center">
            <img src="/logos/ford_logo.jpeg" alt="Company Logo" className="w-20 h-20 rounded" />
            <div>
              <h3 className="text-xl font-semibold">Connected Data Software Intern – Ford Motor Company</h3>
              <p className="text-sm text-gray-400 mb-2">May 2023 – Aug 2023</p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Developed a real-time transmission torque monitoring module in C for Ford’s Powertrain Control Module, using a customized rainflow algorithm to track hysteresis loops and estimate transmission fatigue, achieving a 98.3\% memory reduction over raw data storage.</li>
                <li>Validated performance on real-world drive data in a simulated PCM environment, enabling future fleet-wide deployment of torque fatigue tracking without hardware upgrades.</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex gap-4 items-center">
            <img src="/logos/michigan_medicine_logo.jpg" alt="Company Logo" className="w-20 h-12 rounded" />
            <div>
              <h3 className="text-xl font-semibold">Software Engineering Technician – Michigan Medicine</h3>
              <p className="text-sm text-gray-400 mb-2">May 2023 – Aug 2023</p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Built a reusable reporting pipeline in Python to process quantitative and qualitative teaching feedback for Michigan Medicine lecturers, saving 98\% of manual effort and streamlining reviews across hundreds of faculty.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}