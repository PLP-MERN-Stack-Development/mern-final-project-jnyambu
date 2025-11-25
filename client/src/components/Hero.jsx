import React from 'react';
import { Code } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <Code size={48} className="text-purple-400" />
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          MERN Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Building full-stack applications with MongoDB, Express, React & Node.js
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            View Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}