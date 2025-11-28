import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20">
          <p className="text-lg text-gray-300 mb-6">
            I'm a passionate full-stack developer specializing in the MERN stack. With a strong foundation in modern web technologies, I create scalable, efficient, and user-friendly applications.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            My expertise lies in building complete solutions from database design to intuitive front-end interfaces. I'm committed to writing clean, maintainable code and staying current with the latest industry trends.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {['5+ Projects', '2+ Years Exp', 'Full-Stack', 'API Design'].map((item, i) => (
              <div key={i} className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                <div className="text-2xl font-bold text-purple-400">{item.split(' ')[0]}</div>
                <div className="text-sm text-gray-400">{item.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}