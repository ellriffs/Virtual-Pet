const maxAge = 30
const maxFit = 10;
const minFit = 0
const highMidFit = 4
const lowestFit = 3
const maxHunger = 10
const highMidHunger = 6
const midHunger = 5

const hungry =  "I am hungry";
const needWalk =  "I need a walk";
const eatAndWalk  = "I am hungry AND I need a walk"


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = []
}

Pet.prototype = {
    get isAlive() {
    return this.age < maxAge && this.hunger < maxHunger && this.fitness > minFit;
    },

growUp(){
        if (!this.isAlive) {
            throw new Error(this.name+' is no longer alive :(');
}
        this.age += 1, this.hunger += midHunger, this.fitness -= lowestFit
},       

walk(){
    if (!this.isAlive) {
    throw new Error(this.name+' is no longer alive :(');}
    if (this.fitness <= 6){
    this.fitness += 4
    }
},

feed(){
    if (!this.isAlive) {
    throw new Error(this.name+' is no longer alive :(');
}   if (this.hunger >= 3){
    this.hunger -= 3
} else{
    this.hunger -= 2
}
},

checkUp(){
    let result;
    if(this.fitness >= highMidFit && this.hunger <= highMidHunger){
    result = "I feel great"
}   if (this.fitness <= lowestFit && this.hunger >= midHunger ){
    result = "I am hungry AND I need a walk"
}   if (this.fitness <= lowestFit && this.hunger < midHunger) {
    result = "I need a walk"
}   if (this.hunger >= midHunger && this.fitness > lowestFit){
    result =  "I am hungry"
}   if(this.hunger === maxHunger|| this.fitness === minFit){
    result = this.name+' is no longer alive'
}     return result
}
}

Pet.prototype.adoptChild = function  (child) {
    if (!this.isAlive) {
        throw new Error(this.name+' is no longer alive :(');
    }   this.children.push(child)
};





module.exports = Pet;
