/**
 * @description Base Plant object, extended into plant types
 * @param name
 * @param species
 * @param age
 * @param location
 * @param mood
 * @constructor
 */
function Plant (name, species, age, location, mood)
{
    this.name       = name;
    this.species    = species;
    this.age        = age;
    this.location   = location;
    this.mood       = mood;
}

//Child classes will call this and add additional info for their plant type
Plant.prototype.getPlantInfo = function() {
    let plantStatus = this.name + ' is species ' + this.species + '  & lives in '
        +  this.location + '. ';
    plantStatus += this.name + ' is feeling ' + this.mood + '. ';
    plantStatus += this.name + ' is ' + this.age + ' years old.';
    return plantStatus;
};

module.exports = Plant;
