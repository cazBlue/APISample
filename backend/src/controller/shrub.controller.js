const express = require('express');
const router = express.Router();
const plantService = require('../service/plant.service');
const Shrub = require('../models/shrub.model');

// define the home page route
router.get('/', async (req, res) => {
    res.json(await plantService.getShrubs());
});

router.post('/', async (req, res) => {

    let shrub = req.body;

    //note, this needs further validation to ensure data passed is correct
    //this gives us access to Tree prototypes if needed
    Object.setPrototypeOf(shrub, Shrub.prototype);

    res.json(await plantService.addPlant(shrub));
});

module.exports = router;

module.exports = router;
