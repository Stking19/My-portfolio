"use client";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#05060A] to-[#0B0F1A] flex items-center justify-center text-white py-20 px-6"
    >
      <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-8">
        {/* Avatar */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_30px_#00E5FF66]">
          <Image
            src="/IMG/main-profile.jpg"
            alt="Stephen Okoli"
            fill
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
          About Me
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
          Hey, I’m{" "}
          <span className="text-cyan-400 font-semibold">Stephen Okoli</span>, a{" "}
          <span className="text-purple-400 font-semibold">
            Frontend Developer
          </span>{" "}
          passionate about building sleek, responsive, and interactive digital
          experiences. I blend creativity and logic to craft{" "}
          <span className="text-cyan-300">AI-inspired</span> interfaces that
          connect design and technology seamlessly.
        </p>

        {/* Skill Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {[
            "React.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-xl bg-[#0A0F1C]/70 border border-cyan-500/40 shadow-[0_0_15px_#00E5FF33] text-sm font-medium text-gray-200 hover:text-cyan-400 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
