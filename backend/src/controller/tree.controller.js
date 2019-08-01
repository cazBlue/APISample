const express = require('express');
const router = express.Router();
const plantService = require('../service/plant.service');
const Tree = require('../models/tree.model');

// define the home page route
router.get('/', async (req, res) => {
    res.json(await plantService.getTrees());
});

router.post('/', async (req, res) => {

    let tree = req.body;

    //note, this needs further validation to ensure data passed is correct
    //this gives us access to Tree prototypes if needed
    Object.setPrototypeOf(tree, Tree.prototype);

    res.json(await plantService.addPlant(tree));
});

module.exports = router;
