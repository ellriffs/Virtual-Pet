const maxFit = 10;
const maxHumger = 0

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
    if (this.fitness === maxFit){
        this.fitness    
    } if (this.fitness === (maxFit -1)) {
        this.fitness += 1
    } if (this.fitness === (maxFit - 2)){
        this.fitness += 2
    } if (this.fitness === (maxFit -3)){
        this.fitness += 3
    }else if (this.fitness <= (maxFit -4)){
        this.fitness += 4
    };
}

    Pet.prototype.feed = function(){
        if (this.hunger >=(maxHumger + 3)){
            this.hunger -= 3
    }   else{
            this.hunger -= 1
    };
    }


module.exports = Pet;


