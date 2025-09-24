import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo size="md" variant="dark" />
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-800 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors">Contact</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-800 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;