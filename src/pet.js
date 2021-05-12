const maxFitness = 10;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}
    Pet.prototype.growUp = function(){
    this.age += 1, this.hunger += 5, this.fitness -= 3
}
    Pet.prototype.walk = function(){
    if (this.fitness === 10){
        this.fitness    
    } if (this.fitness === 9) {
        this.fitness += 1
    } if (this.fitness === 8){
        this.fitness += 2
    } if (this.fitness === 7){
        this.fitness += 3
    }if (this.fitness <=6){
        this.fitness += 4
    };

    };

module.exports = Pet;


