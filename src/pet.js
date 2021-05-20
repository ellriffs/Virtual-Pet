const maxFit = 10;
const minFit = 0
maxHunger = 0
const hungry = "I am hungry";
const needWalk = "I need a walk";
const eatAndWalk  ="I am hungry AND I need a walk"


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = []
}

Pet.prototype = {
    get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}

    Pet.prototype.growUp =function(){
        if (!this.isAlive) {
            throw new Error(this.name+' is no longer alive :(');
}
        this.age += 1, this.hunger += 5, this.fitness -= 3
        console.log("YAYY!! "+`${this.name}`+" is " + this.age+" years old!!")
}       

    Pet.prototype.walk = function(){
    if (!this.isAlive) {
    throw new Error(this.name+' is no longer alive :(');

    } if (this.fitness === maxFit){
            this.fitness    
    } if (this.fitness === (maxFit -1)) {
        this.fitness += 1
    } if (this.fitness === (maxFit - 2)){
        this.fitness += 2
    } if (this.fitness === (maxFit -3)){
        this.fitness += 3
    }else if (this.fitness <= (maxFit -4)){
        this.fitness += 4
    }; console.log(`${this.name}`+"'s fitness is now " + this.fitness)
}



    Pet.prototype.feed = function(){
    if (!this.isAlive) {
    throw new Error(this.name+' is no longer alive :(');
}
    if  (this.hunger >= (maxHunger + 3)){
        this.hunger -= 3
}   if  (this.hunger === (maxHunger + 2)){
        this.hunger -= 2
}  else {
        this.hunger 
    }; console.log(`${this.name}`+"'s hunger is now " + this.hunger)
}

Pet.prototype.checkUp = function(){
    let result;
    if(this.fitness >= 4 && this.hunger <= 6){
        result = "I feel great"
}   if (this.fitness <= 3 && this.hunger >= 5 ){
        result = "I am hungry AND I need a walk"
}   if (this.fitness <= 3 && this.hunger < 5) {
        result = "I need a walk"
}   if (this.hunger >= 5 && this.fitness > 3){
    result = "I am hungry"
}   if(this.hunger ===10 || this.fitness === 0){
    result = this.name+' is no longer alive'
}    return result 
}

Pet.prototype.adoptChild = function (child) {
    if (!this.isAlive) {
        throw new Error(this.name+' is no longer alive :(');
    }   this.children.push(child)
    console.log("Congratulations to the new parent. "+`${this.name}`+"!!")
};





module.exports = Pet;
