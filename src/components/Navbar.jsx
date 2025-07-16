import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "TechStack", href: "#tech" },
    { name: "Contact", href: "#contact" },
  ];

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-lg cursor-pointer select-none">
          <span className="text-purple-500 text-2xl">⚛️</span> Devarshi Tambulkar
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Hire me! <span className="ml-1">›</span>
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md z-40 flex flex-col p-6 md:hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end mb-6 text-white text-3xl hover:text-red-500"
            aria-label="Close menu"
          >
            &times;
          </button>

          {/* Left-aligned Links */}
          <ul className="flex flex-col gap-4 text-base font-medium text-white">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-block mt-4 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
              >
                Hire me! <span className="ml-1">›</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
