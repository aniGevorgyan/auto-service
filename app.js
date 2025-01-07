const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const indexRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const serviceRoutes = require('./routes/service');
const contactRoutes = require('./routes/contact');

// Use the routes
app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
app.use('/service', serviceRoutes);
app.use('/contact', contactRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));
//
// // Default route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
//
// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });