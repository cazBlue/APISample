const express = require('express');
const router = express.Router();
const plantService = require('../service/plant.service');
const Herb = require('../models/herb.model');

// define the home page route
router.get('/', async (req, res) => {
    res.json(await plantService.getHerbs());
});

router.post('/', async (req, res) => {

    let herb = req.body;

    //note, this needs further validation to ensure data passed is correct
    //this gives us access to Tree prototypes if needed
    Object.setPrototypeOf(herb, Herb.prototype);

    res.json(await plantService.addPlant(herb));
});

module.exports = router;
