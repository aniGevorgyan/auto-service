const express = require('express');
const path = require("path");
const router = express.Router();

// Define the contact route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'contact.html'));
});

module.exports = router;