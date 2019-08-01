const Plant = require('./plant.model');

//declare a Shrub object that will inherit from the base Plant prototype
function Shrub (id, name, species, age, location, mood, swimStyle)
{
    Plant.call(this, id,  name, species, age, location, mood);
    this.swimStyle = swimStyle;
}

Shrub.prototype = Object.create(Plant.prototype); //link the OakShrub to our base Shrub prototype

//extend the parent getPlantInfo function by adding dance style
Shrub.prototype.getPlantInfo = function () {
    const plantInfo = Plant.prototype.getPlantInfo.call(this);
    return  plantInfo + ' Swim style: ' +  this.swimStyle;
};

/*
const shrub = new Shrub('Bill', 'Oak', 100, 'france', 'mood', 'Freestyle');
console.log(shrub.getPlantInfo());
*/

module.exports = Shrub;
