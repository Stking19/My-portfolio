"use client";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full h-[80vh] bg-black text-white flex items-center justify-center px-10 py-20"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Skills & Tools
          </h2>
          <div className="flex space-x-2 text-sm font-mono">
            <span className="text-pink-500">&lt;div&gt;</span>
            <span className="text-green-400">&lt;h2&gt;</span>
            <span className="text-yellow-400">&lt;p&gt;</span>
          </div>

          <p className="text-gray-300 leading-relaxed">
            My skills span across web development, design, and AI. I adapt fast
            like a sponge and I’m always in pursuit of technologies that make me
            a better engineer and creative professional.
          </p>

          <div className="flex space-x-2 text-sm font-mono">
            <span className="text-green-400">&lt;/p&gt;</span>
            <span className="text-blue-400">&lt;/div&gt;</span>
          </div>
        </div>

        {/* RIGHT SIDE - SKILL CLOUD */}
        <div className="relative flex flex-wrap justify-center items-center gap-4 text-gray-200">
          {[
            "React",
            "Next.js",
            "TailwindCSS",
            "JavaScript",
            "TypeScript",
            "SEO",
            "Web Development",
            "Mobile Development",
            "React Native",
            "Graphic Design",
            "Git",
            "API Integration",
            "UI/UX",
            "Nativewind",
          ].map((skill, i) => (
            <span
              key={i}
              className="text-lg md:text-xl font-semibold cursor-default bg-gray-900/60 px-3 py-1 rounded-xl shadow-md hover:scale-110 transition transform hover:shadow-cyan-500/40 hover:text-cyan-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}