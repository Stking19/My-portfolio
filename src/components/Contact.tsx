"use client";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center bg-black text-gray-200 px-6"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1),_transparent_80%)] pointer-events-none"></div>

      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Let’s <span className="text-cyan-400">Connect</span>
      </h2>

      {/* Contact Options */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Email */}
        <a
          href="mailto:okolistephen43@gmail.com"
          className="flex items-center gap-4 p-6 bg-navground rounded-xl hover:shadow-[0_0_20px_#00E5FF] transition-shadow duration-300 cursor-pointer"
        >
          <MdEmail size={28} className="text-cyan-400" />
          <span className="text-lg">okolistephen43@gmail.com</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+2348165048721"
          className="flex items-center gap-4 p-6 bg-navground rounded-xl hover:shadow-[0_0_20px_#9333EA] transition-shadow duration-300 cursor-pointer"
        >
          <FaPhoneAlt size={24} className="text-purple-400" />
          <span className="text-lg">+234 816 504 8721</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/chinemerem-okoli-a4a1ba383"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 bg-navground rounded-xl hover:shadow-[0_0_20px_#0A66C2] transition-shadow duration-300 cursor-pointer"
        >
          <FaLinkedin size={28} className="text-blue-500" />
          <span className="text-lg">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Stking19"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 bg-navground rounded-xl hover:shadow-[0_0_20px_#fff] transition-shadow duration-300 cursor-pointer"
        >
          <FaGithub size={28} className="text-white" />
          <span className="text-lg">GitHub</span>
        </a>
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Stephen Okoli. All rights reserved.
      </p>
    </section>
  );
}