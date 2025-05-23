"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id], div[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClicks = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId)
    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#Home"
          onClick={(e) => handleNavClicks(e, "Home")}
          className={`nav-items ${
            activeSection === "Home" ? "bg-white text-gray-900 hover:bg-gray-950 hover:text-white" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#Projects"
          onClick={(e) => handleNavClicks(e, "Projects")}
          className={`nav-items ${
            activeSection === "Projects" ? "bg-white text-gray-900 hover:bg-gray-950 hover:text-white" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#About"
          onClick={(e) => handleNavClicks(e, "About")}
          className={`nav-items ${
            activeSection === "About" ? "bg-white text-gray-900 hover:bg-gray-950 hover:text-white" : ""
          }`}
        >
          About
        </a>
        <a
          href="#Contact"
          onClick={(e) => handleNavClicks(e, "Contact")}
          className={`nav-items ${
            activeSection === "Contact" ? "bg-white text-gray-900 hover:bg-gray-950 hover:text-white" : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
