const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Project = require('../models/Project');
const Skill = require('../models/Skill');

// Load env vars from parent directory
dotenv.config({ path: path.join(__dirname, '../.env') });

// Check if MONGODB_URI is loaded
if (!process.env.MONGODB_URI) {
  console.error('ERROR: MONGODB_URI is not defined in .env file');
  process.exit(1);
}

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack shopping platform with cart, payments, and admin dashboard',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: 'from-purple-500 to-pink-500',
    githubUrl: 'https://github.com/jnyambu',
    liveUrl: '',
    order: 1
  },
  {
    title: 'Real-Time Chat Application',
    description: 'WebSocket-based messaging app with rooms and notifications',
    tech: ['Socket.io', 'Express', 'React', 'MongoDB'],
    color: 'from-blue-500 to-cyan-500',
    githubUrl: 'https://github.com/jnyambu',
    liveUrl: '',
    order: 2
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project tracker with teams and deadlines',
    tech: ['MERN Stack', 'JWT Auth', 'Redux'],
    color: 'from-orange-500 to-red-500',
    githubUrl: 'https://github.com/jnyambu',
    liveUrl: '',
    order: 3
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics platform aggregating data from multiple sources',
    tech: ['React', 'Chart.js', 'REST APIs', 'Node.js'],
    color: 'from-green-500 to-teal-500',
    githubUrl: 'https://github.com/jnyambu',
    liveUrl: '',
    order: 4
  }
];

const skills = [
  // MERN Stack Core
  {
    name: 'MongoDB',
    description: 'NoSQL database design, aggregation & optimization',
    icon: '🍃',
    color: 'bg-green-500',
    order: 1
  },
  {
    name: 'Express.js',
    description: 'RESTful API development & middleware architecture',
    icon: '⚡',
    color: 'bg-gray-700',
    order: 2
  },
  {
    name: 'React',
    description: 'Modern UI with hooks, context & component architecture',
    icon: '⚛️',
    color: 'bg-blue-500',
    order: 3
  },
  {
    name: 'Node.js',
    description: 'Backend server development & asynchronous programming',
    icon: '🟢',
    color: 'bg-green-600',
    order: 4
  },
  
  // Additional Backend Technologies
  {
    name: 'Python',
    description: 'Scripting, automation & backend development',
    icon: '🐍',
    color: 'bg-yellow-500',
    order: 5
  },
  {
    name: 'MySQL',
    description: 'Relational database design & SQL query optimization',
    icon: '🐬',
    color: 'bg-blue-600',
    order: 6
  },
  {
    name: 'Socket.io',
    description: 'Real-time bidirectional event-based communication',
    icon: '🔌',
    color: 'bg-purple-600',
    order: 7
  },
  
  // Frontend Technologies
  {
    name: 'HTML5 & CSS3',
    description: 'Semantic markup & modern styling techniques',
    icon: '🎨',
    color: 'bg-orange-500',
    order: 8
  },
  {
    name: 'JavaScript (ES6+)',
    description: 'Modern JavaScript features & best practices',
    icon: '📜',
    color: 'bg-yellow-400',
    order: 9
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development',
    icon: '💨',
    color: 'bg-cyan-500',
    order: 10
  },
  
  // State Management & Tools
  {
    name: 'Redux',
    description: 'State management for complex React applications',
    icon: '🔄',
    color: 'bg-purple-500',
    order: 11
  },
  {
    name: 'JWT Authentication',
    description: 'Secure token-based user authentication',
    icon: '🔐',
    color: 'bg-red-500',
    order: 12
  },
  
  // Development Tools
  {
    name: 'Git & GitHub',
    description: 'Version control & collaborative development',
    icon: '📦',
    color: 'bg-gray-800',
    order: 13
  },
  {
    name: 'REST APIs',
    description: 'RESTful API design & implementation',
    icon: '🌐',
    color: 'bg-indigo-500',
    order: 14
  },
  {
    name: 'Postman',
    description: 'API testing & documentation',
    icon: '🧪',
    color: 'bg-orange-600',
    order: 15
  },
  {
    name: 'NPM & Package Management',
    description: 'Dependency management & build tools',
    icon: '📚',
    color: 'bg-red-600',
    order: 16
  }
];

const seedDatabase = async () => {
  try {
    console.log('Connecting to MongoDB...');
    console.log('URI:', process.env.MONGODB_URI.replace(/:[^:]*@/, ':****@')); // Hide password
    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for seeding...');

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    console.log('Cleared existing data');

    // Insert seed data
    await Project.insertMany(projects);
    console.log(`✅ ${projects.length} projects seeded successfully`);

    await Skill.insertMany(skills);
    console.log(`✅ ${skills.length} skills seeded successfully`);

    console.log('\n🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
};

seedDatabase();