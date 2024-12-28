'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Make navbar visible when scrolling up or at the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-[#0d1224]/90 backdrop-blur-md transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold bg-gradient-to-r from-[#16f2b3] to-[#0ea37e] bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Sukrut Dani
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link 
              href="#about" 
              className="text-base font-medium text-gray-300 hover:text-[#16f2b3] transition-colors relative group"
            >
              <span className="relative">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16f2b3] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="#experience" 
              className="text-base font-medium text-gray-300 hover:text-[#16f2b3] transition-colors relative group"
            >
              <span className="relative">
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16f2b3] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="#skills" 
              className="text-base font-medium text-gray-300 hover:text-[#16f2b3] transition-colors relative group"
            >
              <span className="relative">
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16f2b3] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="#education" 
              className="text-base font-medium text-gray-300 hover:text-[#16f2b3] transition-colors relative group"
            >
              <span className="relative">
                Education
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16f2b3] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="#projects" 
              className="text-base font-medium text-gray-300 hover:text-[#16f2b3] transition-colors relative group"
            >
              <span className="relative">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16f2b3] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="#contact" 
              className="text-base font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[#16f2b3] to-[#0ea37e] text-gray-900 hover:shadow-lg hover:shadow-[#16f2b3]/20 transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-[#16f2b3] focus:outline-none hover:text-[#0ea37e] transition-colors"
          >
            {isOpen ? <VscChromeClose size={24} /> : <RiMenu3Fill size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[280px]" : "max-h-0"
        } overflow-hidden bg-[#0d1224]`}
      >
        <div className="container mx-auto px-8 py-4 flex flex-col space-y-4">
          <Link
            href="#about"
            className="text-gray-300 hover:text-[#16f2b3] transition-colors text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-gray-300 hover:text-[#16f2b3] transition-colors text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="#skills"
            className="text-gray-300 hover:text-[#16f2b3] transition-colors text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#education"
            className="text-gray-300 hover:text-[#16f2b3] transition-colors text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <Link
            href="#projects"
            className="text-gray-300 hover:text-[#16f2b3] transition-colors text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="inline-block text-center text-gray-900 bg-gradient-to-r from-[#16f2b3] to-[#0ea37e] px-4 py-2 rounded-full text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;