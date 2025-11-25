import React, { useState, useEffect } from 'react';
import { getSkills } from '../utils/api';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        setSkills(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
        // Fallback to static data if API fails
        setSkills([
          { _id: '1', name: 'MongoDB', description: 'NoSQL database design & optimization', icon: '🍃', color: 'bg-green-500' },
          { _id: '2', name: 'Express.js', description: 'RESTful API development', icon: '⚡', color: 'bg-gray-700' },
          { _id: '3', name: 'React', description: 'Modern UI with hooks & context', icon: '⚛️', color: 'bg-blue-500' },
          { _id: '4', name: 'Node.js', description: 'Backend server architecture', icon: '🟢', color: 'bg-green-600' },
          { _id: '5', name: 'Python', description: 'Scripting, automation & backend development', icon: '🐍', color: 'bg-yellow-500' },
          { _id: '6', name: 'MySQL', description: 'Relational database design & SQL optimization', icon: '🐬', color: 'bg-blue-600' },
          { _id: '7', name: 'Socket.io', description: 'Real-time bidirectional communication', icon: '🔌', color: 'bg-purple-600' },
          { _id: '8', name: 'HTML5 & CSS3', description: 'Semantic markup & modern styling', icon: '🎨', color: 'bg-orange-500' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-purple-400">Loading skills...</div>
      </section>
    );
  }

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill._id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="flex flex-col items-center text-center gap-3">
                <div className={`${skill.color} p-4 rounded-lg group-hover:scale-110 transition-transform`}>
                  <div className="text-4xl">{skill.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}