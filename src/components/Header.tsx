"use client";

import { GoHomeFill } from "react-icons/go";
import { IconType } from "react-icons";
import {
  FaEnvelope,
  FaFolder,
  FaUserAstronaut,
  FaBrain,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const navItem: { icon: IconType; label: string; url: string }[] = [
    { icon: GoHomeFill, label: "Home", url: "#home" },
    { icon: FaUserAstronaut, label: "About", url: "#about" },
    { icon: FaFolder, label: "Projects", url: "#projects" },
    { icon: FaBrain, label: "Skills", url: "#skills" },
    { icon: FaEnvelope, label: "Contact", url: "#contact" },
    { icon: FaGithub, label: "Github", url: "https://github.com/Stking19" },
    {
      icon: FaLinkedin,
      label: "Linkedin",
      url: "https://www.linkedin.com/in/chinemerem-okoli-a4a1ba383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!mounted) return null;

  const handleNav = (index: number, url: string) => {
    setActiveIndex(index);
    setIsOpen(false);

    if (url.startsWith("#")) {
      const element = document.querySelector(url);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(url);
    }
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex flex-col items-center">
      {/* Desktop Navigation */}
      <nav className="h-14 w-[420px] bg-[#0A0F1C]/70 max-sm:hidden backdrop-blur-lg border border-cyan-500/20 rounded-2xl flex items-center justify-around px-2 shadow-[0_0_25px_#00E5FF33]">
        {navItem.map((Item, index) => (
          <div
            key={index}
            onClick={() => handleNav(index, Item.url)}
            className={`w-[48px] h-[38px] rounded-xl flex justify-center items-center cursor-pointer relative group transition-all duration-300 
              ${
                index === activeIndex
                  ? "bg-cyan-500 text-black shadow-[0_0_12px_#00E5FF]"
                  : "text-cyan-300 hover:bg-cyan-500/20"
              }`}
          >
            <Item.icon className="text-[18px]" />
            <span className="absolute top-12 px-2 py-1 text-xs rounded-md bg-black/80 text-cyan-300 opacity-0 group-hover:opacity-100 transition">
              {Item.label}
            </span>
          </div>
        ))}
      </nav>

      {/* Mobile Navbar Toggle (visible on small screens) */}
      <div className="w-full px-5 flex justify-end md:hidden relative z-[60]">
        <button onClick={() => setIsOpen(true)}>
          <HiMenu size={35} className="text-white" />
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* ✅ Background Overlay + Blur */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md md:hidden z-40 h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* ✅ Slide-in Menu Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 right-0 h-screen w-64 bg-[#0A0F1C]/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-[0_0_20px_#00E5FF33] flex flex-col pt-5 px-6 space-y-6 md:hidden z-80"
            >
              {/* ✅ Close Button inside panel */}
              <div className="w-full flex justify-end mb-4">
                <button onClick={() => setIsOpen(false)}>
                  <IoClose size={35} className="text-cyan-400" />
                </button>
              </div>

              {navItem.map((Item, index) => (
                <div
                  key={index}
                  onClick={() => handleNav(index, Item.url)}
                  className={`flex items-center gap-4 text-lg cursor-pointer transition-all duration-300 ${
                    index === activeIndex
                      ? "text-cyan-400 font-semibold"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  <Item.icon className="text-xl" />
                  {Item.label}
                </div>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
