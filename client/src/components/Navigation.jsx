import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation({ activeSection, scrollToSection, isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {'<Dev />'}
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${activeSection === section ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
              >
                {section}
              </button>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 capitalize text-gray-300 hover:text-white hover:bg-slate-800 rounded"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}