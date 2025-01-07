const express = require('express');
const path = require("path");
const router = express.Router();

// Define the about route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'about.html'));
});


module.exports = router;