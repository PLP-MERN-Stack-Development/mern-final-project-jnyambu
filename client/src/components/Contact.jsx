import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { sendContactMessage } from '../utils/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await sendContactMessage(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20">
          <p className="text-xl text-center text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a href="mailto:nyamburajosephine36@gmail.com" className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg hover:from-purple-500/20 hover:to-pink-500/20 transition-all border border-purple-500/20 hover:border-purple-500/50">
              <Mail size={32} className="mb-3 text-purple-400" />
              <span className="font-semibold">Email</span>
              <span className="text-sm text-gray-400 break-all text-center">nyamburajosephine36@gmail.com</span>
            </a>
            <a href="https://github.com/jnyambu/protifolio.git" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg hover:from-purple-500/20 hover:to-pink-500/20 transition-all border border-purple-500/20 hover:border-purple-500/50">
              <Github size={32} className="mb-3 text-purple-400" />
              <span className="font-semibold">GitHub</span>
              <span className="text-sm text-gray-400">@jnyambu</span>
            </a>
            <a href="https://www.linkedin.com/in/josephinenyambura" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg hover:from-purple-500/20 hover:to-pink-500/20 transition-all border border-purple-500/20 hover:border-purple-500/50">
              <Linkedin size={32} className="mb-3 text-purple-400" />
              <span className="font-semibold">LinkedIn</span>
              <span className="text-sm text-gray-400">josephinenyambura</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/50 text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/50 text-white"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/50 h-32 text-white"
              required
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-green-400 text-center">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-400 text-center">Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}