"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const projects = [
  {
    title: "Todo App",
    description: "A simple to-do list app built with React Native and Expo.",
    tech: ["React Native", "Expo", "TypeScript"],
    github: "https://github.com/Stking19/TodoNative",
    demo: "#",
  },
  {
    title: "Weather App",
    description: "Weather forecast web app consuming OpenWeather API.",
    tech: ["React", "Axios", "TailwindCSS"],
    github: "https://github.com/Stking19/weather",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js, TailwindCSS.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Stking19/My-portfolio",
    demo: "#",
  },
  {
    title: "HavenList",
    description: "A property listing platform that connects verified buyers and landlords.",
    tech: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/Stking19/HavenList",
    demo: "#",
  },
  {
    title: "Krea Dashboard",
    description: "Cloned a pixel-perfect Krea.ai dashboard for a job application.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Stking19/Cartolink",
    demo: "#",
  },
  {
    title: "Moniepoint Website Clone",
    description: "A clone of the Moniepoint website, built to practice modern web development techniques.",
    tech: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/Stking19/Moniepoint",
    demo: "#",
  },
];

export default function Projects() {
  const img = ["/IMG/image-1.jpg", "/IMG/image-2.jpg", "/IMG/image-3.jpg"];
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prev) => (prev + 1) % img.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [img.length]); // <-- fixed dependency

  return (
    <section
      id="projects"
      className="relative w-full h-[760px] max-sm:h-screen overflow-hidden"
    >
      {img.map((src, index) => (
        <div
          key={index}
          className={`absolute bg-fixed inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === num ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      ))}

      <div className="relative z-10 h-[80vh] max-sm:h-[60vh] bg-black flex flex-col items-center justify-center text-white px-6 py-20">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 drop-shadow-lg mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="flex w-full overflow-y-hidden scrollbar-hide">
          <div className="w-max flex gap-10 px-4 py-10 items-center">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-[#0A0F1C]/80 w-[350px] border border-cyan-500/30 rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_20px_#00E5FF22] hover:shadow-[0_0_30px_#00E5FF55] transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-lg bg-[#111827] border border-cyan-500/30 text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-200 transition"
                  >
                    <FaGithub /> Code
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-200 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[40vh] bg-black/40 absolute flex flex-col justify-center items-center gap-2.5">
        <h2 className="text-2xl font-bold text-cyan-400">
          CHECK OUT MY RESUME
        </h2>
        <button className="relative w-[145px] h-[45px] font-bold bg-black cursor-pointer text-white rounded-lg overflow-hidden">
          <a href="/My-Cv.pdf" download className=" w-full h-full justify-center relative z-10 flex gap-2 items-center">Download <span><MdOutlineFileDownload /></span></a>

          <span className="absolute inset-0 rounded-lg p-[2px] animate-border-rotate">
            <span className="block h-full w-full rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></span>
          </span>

          <span className="absolute inset-[3px] bg-black rounded-lg z-0"></span>
        </button>
      </div>
    </section>
  );
}
