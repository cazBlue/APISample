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

exports.getTrees = async () =>
{
    return await plantProvider.getTrees();
};

exports.getHerbs = async () =>
{
    return await plantProvider.getHerbs();
};

exports.getShrubs = async () =>
{
    return await plantProvider.getShrubs();
};

/**
 *
 * @param plant
 */
exports.addPlant = async function(plant)
{
    return plantProvider.addPlant(plant)
};

