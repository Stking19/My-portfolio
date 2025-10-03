"use client";

import { GoHomeFill } from "react-icons/go";
import { IconType } from "react-icons";
import { FaEnvelope } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaUserAstronaut } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Header() {
  const navItem: { icon: IconType; label: string; url: string }[] = [
    { icon: GoHomeFill, label: "Home", url: "#home" },
    { icon: FaUserAstronaut, label: "About", url: "#about" },
    { icon: FaFolder, label: "Projects", url: "#projects" },
    { icon: FaBrain, label: "Skills", url: "#skills" },
    { icon: FaEnvelope, label: "Contact", url: "#contact" },
    { icon: FaGithub, label: "Github", url: "https://github.com/Stking19" },
    { icon: FaLinkedin, label: "Linkedin", url: "https://www.linkedin.com/in/chinemerem-okoli-a4a1ba383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleNav = (index: number, url: string) => {
    setActiveIndex(index);
    router.push(url);
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="h-14 w-[420px] bg-[#0A0F1C]/70 backdrop-blur-lg border border-cyan-500/20 rounded-2xl flex items-center justify-around px-2 shadow-[0_0_25px_#00E5FF33]">
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
            {/* Tooltip */}
            <span className="absolute top-12 px-2 py-1 text-xs rounded-md bg-black/80 text-cyan-300 opacity-0 group-hover:opacity-100 transition">
              {Item.label}
            </span>
          </div>
        ))}
      </nav>
    </header>
  );
}