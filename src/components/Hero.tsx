"use client";
import { motion } from "framer-motion";

export default function HeroAI() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-gray-200 overflow-hidden"
    id="home"
    >
      
      {/* Background - stays fixed */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0A0F1C] to-[#111827] bg-fixed"></div>

      {/* Animated glowing circles */}
      <div className="fixed top-20 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="fixed bottom-20 right-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Radial glow layer */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2),_transparent_70%)] animate-pulse"></div>

      {/* Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-5xl md:text-7xl font-extrabold mb-4 tracking-wide"
      >
        Building <span className="text-cyan-400">AI-Driven</span> Interfaces
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative text-lg md:text-2xl text-gray-400 mb-6 max-w-2xl"
      >
        I’m Stephen, a frontend developer passionate about crafting{" "}
        <span className="text-purple-400">futuristic</span> and{" "}
        <span className="text-cyan-400">AI-inspired</span> web experiences.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-full font-medium shadow-lg text-white hover:shadow-[0_0_20px_#00E5FF] transition"
      >
        🚀 View My Work
      </motion.a>
    </section>
  );
}