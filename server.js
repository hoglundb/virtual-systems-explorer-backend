const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (React build + Unity)
app.use(express.static(path.join(__dirname, '..', 'build')));

// API routes (future)
// app.use('/api', require('./routes/api'));

// SPA fallback - serve index.html for all routes
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`VSE Backend running on http://localhost:${PORT}`);
});
