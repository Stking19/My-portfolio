"use client";

export default function HeroAI() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-gray-200 overflow-hidden"
    >
      {/* Background — now absolute (not fixed) to avoid flickering */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] to-[#111827]" />

      {/* Soft glowing circles */}
      <div className="absolute top-20 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Subtle radial glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),_transparent_70%)]" />

      {/* Hero Content */}
      <h1
        className="relative text-4xl md:text-7xl font-extrabold mb-4 tracking-wide"
      >
        Building <span className="text-cyan-400">AI-Driven</span> Interfaces
      </ h1>

      < p
        className="relative text-lg md:text-2xl text-gray-400 mb-6 max-w-2xl leading-relaxed"
      >
        I’m Stephen, a frontend developer passionate about crafting{" "}
        <span className="text-purple-400">futuristic</span> and{" "}
        <span className="text-cyan-400">AI-inspired</span> web experiences.
      </ p>

      {/* CTA Button */}
      < a
        href="#projects"
        className="relative bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-full font-medium shadow-lg text-white hover:shadow-[0_0_20px_#00E5FF] transition"
      >
        🚀 View My Work
      </ a>
    </section>
  );
}
