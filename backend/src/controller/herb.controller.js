const express = require('express');
const router = express.Router();


// define the home page route
router.get('/', function (req, res) {
    res.send('Herb home page')
});

// define the about route
router.get('/about', function (req, res) {
    res.send('About Herbs')
});

module.exports = router;
