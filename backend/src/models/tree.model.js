const Plant = require('./plant.model');

//declare a tree object that will inherit from the base Plant prototype
function Tree (id, name, species, age, location, mood, danceStyle)
{
    Plant.call(this, id, name, species, age, location, mood);
    this.danceStyle = danceStyle;
}

Tree.prototype = Object.create(Plant.prototype); //link the OakTree to our base Tree prototype

//extend the parent getPlantInfo function by adding dance style
Tree.prototype.getPlantInfo = function () {
    const plantInfo = Plant.prototype.getPlantInfo.call(this);
    return  plantInfo + ' Dance style: ' +  this.danceStyle;
};


/*
const tree = new Tree('Bill', 'Oak', 100, 'france', 'mood', 'Slow Jive');
console.log(tree.getPlantInfo());
*/

module.exports = Tree;
