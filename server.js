require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static GLB assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// API routes
app.use('/api/parts', require('./src/routes/parts'));

// Serve React build (production)
app.use(express.static(path.join(__dirname, '..', 'build')));

// SPA fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`VSE Backend running on http://localhost:${PORT}`);
});
