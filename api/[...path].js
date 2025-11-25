// api/[...path].js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    cachedDb = db;
    console.log('MongoDB Connected');
    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

// Import models
const Project = require('../server/models/project');
const Skill = require('../server/models/Skill');
const Contact = require('../server/models/Contact');

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.get('/api/projects', async (req, res) => {
  try {
    await connectToDatabase();
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/skills', async (req, res) => {
  try {
    await connectToDatabase();
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    await connectToDatabase();
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.json({ message: 'Contact form submitted successfully', contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export for Vercel
module.exports = app;