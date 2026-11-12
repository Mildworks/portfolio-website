import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 font-mono transition-all duration-300 border-b border-gray-800 ${
        scrolled ? "bg-black shadow-md" : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      {/* Responsive padding container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center text-sm sm:text-lg font-bold text-white tracking-widest hover:text-gray-300 transition-colors"
          >
            {/* Hide prompt on small screens to save space */}
            <span className="hidden sm:inline-block text-gray-500 font-normal mr-2">C:\&gt;</span>
            MAGHRIBI.WORKS
            <span className="w-2 h-4 bg-white animate-pulse ml-1.5" />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-bold text-gray-400 border border-gray-700 rounded hover:text-white hover:border-gray-500 transition-colors"
          >
            {menuOpen ? "[ close ]" : "[ menu ]"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black border-b border-gray-800 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}