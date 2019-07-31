const express = require('express');
const router = express.Router();
const plantService = require('../service/plant.service');

// define the home page route
router.get('/', async (req, res) => {
    const plants = await plantService.getPlants();
    res.json(plants);
});

module.exports = router;
