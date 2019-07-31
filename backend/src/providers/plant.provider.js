const util = require('util');

//Database
const initDB = require('./buildDatabase');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./plants.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

initDB.buildDatabase(db);




//Models
const Herb = require('../models/herb.model');
const Tree = require('../models/tree.model');
const Shrub = require('../models/shrub.model');

/**
 * Returns all plants from database
 */
exports.getPlants = async function()
{
    const sql = 'select name, species, age, location, mood, trait from plants;';
    return new Promise( ( (resolve, reject) =>
    {
        db.all(sql, [], (err, rows) => {
            if(err)
                reject(err);

            //console.log(rows);
            resolve(rows);
        })
    }));

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
