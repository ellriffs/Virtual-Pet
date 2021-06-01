const STARTING_AGE = 0;
const MIN_HUNGER = 0;
const MAX_AGE = 30;
const MAX_FIT = 10;
const MIN_FIT = 0;
const HIGH_MID_FIT = 4;
const LOWEST_FIT = 3;
const MAX_HUNGER = 10;
const HIGH_MID_HUNGER = 6;
const MID_HUNGER = 5;



function Pet(name) {
    this.name = name;
    this.age = STARTING_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FIT;
    this.children = []
}

Pet.prototype = {
    get isAlive() {
    return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > MIN_FIT;
    },

growUp(){
    if (!this.isAlive){
    throw new Error(`${this.name} is no longer alive :(`)
}
        this.age += 1;
        this.hunger += MID_HUNGER;
        this.fitness -= LOWEST_FIT;
},

walk(){
    if (!this.isAlive) {
    throw new Error(this.name+' is no longer alive :(');
}

    this.fitness <= 6 ? this.fitness +=4:  this.fitness = MAX_FIT
},

feed(){
    if (!this.isAlive) {
    throw new Error(this.name +' is no longer alive :(');
}   
    this.hunger >= 3 ? this.hunger -= 3 : this.hunger = MIN_HUNGER
    
},

checkUp(){
    let result;
    if(this.fitness >= HIGH_MID_FIT && this.hunger <= HIGH_MID_HUNGER){
    result = "I feel great"
}   if (this.fitness <= LOWEST_FIT && this.hunger >= MID_HUNGER ){
    result = "I am hungry AND I need a walk"
}   if (this.fitness <= LOWEST_FIT && this.hunger < MID_HUNGER) {
    result = "I need a walk"
}   if (this.hunger >= MID_HUNGER && this.fitness > LOWEST_FIT){
    result =  "I am hungry"
}   if(this.hunger === MAX_HUNGER || this.fitness === MIN_FIT){
    result = this.name +' is no longer alive'
}     return result
}
}


Pet.prototype.adoptChild = function  (child) {
    if (!this.isAlive) {
        throw new Error(this.name+' is no longer alive :(');
    }   
        this.children.push(child)
};





module.exports = Pet;
