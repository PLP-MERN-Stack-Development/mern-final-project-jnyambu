import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { getProjects } from '../utils/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback to static data if API fails
        setProjects([
          {
            _id: '1',
            title: 'E-Commerce Platform',
            description: 'Full-stack shopping platform with cart, payments, and admin dashboard',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            color: 'from-purple-500 to-pink-500',
            githubUrl: 'https://github.com/jnyambu',
            liveUrl: ''
          },
          {
            _id: '2',
            title: 'Real-Time Chat Application',
            description: 'WebSocket-based messaging app with rooms and notifications',
            tech: ['Socket.io', 'Express', 'React', 'MongoDB'],
            color: 'from-blue-500 to-cyan-500',
            githubUrl: 'https://github.com/jnyambu',
            liveUrl: ''
          },
          {
            _id: '3',
            title: 'Task Management System',
            description: 'Collaborative project tracker with teams and deadlines',
            tech: ['MERN Stack', 'JWT Auth', 'Redux'],
            color: 'from-orange-500 to-red-500',
            githubUrl: 'https://github.com/jnyambu',
            liveUrl: ''
          },
          {
            _id: '4',
            title: 'Social Media Dashboard',
            description: 'Analytics platform aggregating data from multiple sources',
            tech: ['React', 'Chart.js', 'REST APIs', 'Node.js'],
            color: 'from-green-500 to-teal-500',
            githubUrl: 'https://github.com/jnyambu',
            liveUrl: ''
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-purple-400">Loading projects...</div>
      </section>
    );
  }

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-3 py-1 bg-purple-500/20 rounded-full text-xs border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}