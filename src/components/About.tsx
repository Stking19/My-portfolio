"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen bg-black flex items-center justify-center text-white relative"
    >
      {/* Content container */}
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Avatar */}
        <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_25px_#00E5FF]">
          <Image
            src="/IMG/main-profile.jpg"
            alt="Stephen Okoli"
            fill
            className="object-cover"
          />
        </div>

        {/* Headline */}
        <h2 className="text-4xl font-bold text-cyan-400 drop-shadow-lg">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg gap-1 text-gray-300 leading-relaxed max-w-2xl">
          Hi, I’m <span className="text-cyan-400 font-semibold">Stephen Okoli</span>, 
          a passionate <span className="text-purple-400 font-semibold mr-1.5">Frontend Developer</span> 
          who loves building modern, interactive, and user-friendly web & mobile apps.  
          I work with <span className="text-cyan-300">React</span>, <span className="text-cyan-300">Next.js</span>, and 
          <span className="text-cyan-300"> Tailwind CSS</span> to create seamless digital experiences.
        </p>

        {/* Skills (can edit / expand later) */}
        <div className="flex gap-6 mt-4 flex-wrap justify-center">
          <span className="px-4 py-2 rounded-xl bg-[#0A0F1C]/70 border border-cyan-500/40 shadow-[0_0_15px_#00E5FF33] text-sm">
            React.js
          </span>
          <span className="px-4 py-2 rounded-xl bg-[#0A0F1C]/70 border border-cyan-500/40 shadow-[0_0_15px_#00E5FF33] text-sm">
            Next.js
          </span>
          <span className="px-4 py-2 rounded-xl bg-[#0A0F1C]/70 border border-cyan-500/40 shadow-[0_0_15px_#00E5FF33] text-sm">
            TypeScript
          </span>
          <span className="px-4 py-2 rounded-xl bg-[#0A0F1C]/70 border border-cyan-500/40 shadow-[0_0_15px_#00E5FF33] text-sm">
            Tailwind CSS
          </span>
        </div>
      </motion.div>
    </section>
  );
}