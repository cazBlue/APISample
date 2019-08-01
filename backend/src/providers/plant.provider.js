const util = require('util');

//Models
const Herb = require('../models/herb.model');
const Tree = require('../models/tree.model');
const Shrub = require('../models/shrub.model');

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


/**
 * Returns all plants from database
 */
exports.getPlants = async function()
{
    const sql = 'select * from plants;';
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

async function getByType(plantType)
{
    const sql = 'select * from plants where type=?;';
    return new Promise( ( (resolve, reject) =>
    {
        db.all(sql, [plantType], (err, rows) => {
            if(err)
                reject(err);

            //console.log(rows);
            resolve(rows);
        })
    }));
}

exports.getTrees = async () =>
{
    return await getByType('tree')
};

exports.getHerbs = async function()
{
    return await getByType('herb')
};

exports.getShrubs = async function()
{
    return await getByType('shrub')
};

exports.addPlant = function (plant) {
    let trait = '';
    let plantType = '';

    //this is pretty Verbose and would be refactored
    if(plant instanceof Tree) {
        trait = plant.danceStyle;
        plantType = 'tree';
    }
    else if (plant instanceof Herb) {
        trait = plant.remedy;
        plantType = 'herb'
    }
    else if (plant instanceof Shrub) {
        trait = plant.swimStyle;
        plantType = 'shrub'
    }

    return new Promise( ( (resolve, reject) => {
        db.run(`INSERT INTO plants(name, species, age, location, mood, trait, type)
                VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [plant.name, plant.species, plant.age, plant.location, plant.mood, trait, plantType], function (err) {
                if (err) {
                    reject(err.message);
                }
                plant.id = this.lastID;
                resolve(plant);
            });
    }));

};
