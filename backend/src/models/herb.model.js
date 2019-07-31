const Plant = require('./plant.model');

//declare a Herb object that will inherit from the base Plant prototype
function Herb (name, species, age, location, mood, remedy)
{
    Plant.call(this, name, species, age, location, mood);
    this.remedy = remedy;
}

Herb.prototype = Object.create(Plant.prototype); //link the OakHerb to our base Herb prototype

//extend the parent getPlantInfo function by adding dance style
Herb.prototype.getPlantInfo = function () {
    const plantInfo = Plant.prototype.getPlantInfo.call(this);
    return  plantInfo + ' Herbal Remedy: ' +  this.remedy;
};



const herb = new Herb('Bill', 'Oak', 100, 'france', 'mood', 'Sun burn relief');
console.log(herb.getPlantInfo());

