const express = require('express');
const router = express.Router();
const plantService = require('../service/plant.service');

// define the home page route
router.get('/', function (req, res) {
    res.json(plantService.getTrees());
});

module.exports = router;
