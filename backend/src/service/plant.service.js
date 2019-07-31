const Herb = require('../models/herb.model');
const Tree = require('../models/tree.model');
const Shrub = require('../models/shrub.model');
const plantProvider = require('../providers/plant.provider');

/**
 * Returns all plants from database
 */
exports.getPlants = async function()
{
    return await plantProvider.getPlants();
};

exports.getTrees = function()
{
    return plantProvider.getTrees();
};

exports.getHerbs = function()
{
    return plantProvider.getHerbs();
};

exports.getShrubs = function()
{
    return plantProvider.getShrubs();
};

