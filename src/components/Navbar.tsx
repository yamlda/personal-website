import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#000000] backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="font-montserrat font-bold text-2xl text-[#FFF0F5]">
            Undefined
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-[#FFF0F5] hover:text-white transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-[#FFF0F5] hover:text-white transition-colors duration-300">About</Link>
            <Link to="/portfolio" className="text-[#FFF0F5] hover:text-white transition-colors duration-300">Portfolio</Link>
            <Link to="/contact" className="text-[#FFF0F5] hover:text-white transition-colors duration-300">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#FFF0F5]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-[#FFF0F5] hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-[#FFF0F5] hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="block px-3 py-2 text-[#FFF0F5] hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-[#FFF0F5] hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;