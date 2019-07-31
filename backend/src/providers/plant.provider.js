const Herb = require('../models/herb.model');
const Tree = require('../models/tree.model');
const Shrub = require('../models/shrub.model');

const herbs = [
    new Herb('Herby', 'Aloe Vera', 3, 'St Kilda', 'Happy', 'Sub Burn Remedy'),
    new Herb('Frolt', 'Sage', 4, 'Perth', 'Parched', 'Tasty Tea')
];

const trees = [
    new Tree('blinky', 'Eucalyptus', 30, 'Wine Glass Bay', 'relaxed', 'Slow Waltz'),
    new Tree('Groak', 'Oak', 54, 'Cygnet', 'chilly', 'Fat Rumba')
];

const shrubs = [
    new Shrub('Neee', 'Lavender', 1, 'Botanical Gardens', 'pampered', 'Cha Cha')
];

/**
 * Returns all plants from database
 */
exports.getPlants = function()
{
    return {'herbs': herbs, 'trees': trees, 'shrubs': shrubs}
};

exports.getTrees = function()
{
    return {'trees': trees}
};

exports.getHerbs = function()
{
    return {'herbs': herbs}
};

exports.getShrubs = function()
{
    return {'shrubs': shrubs}
};
