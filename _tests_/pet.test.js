const Pet = require('../src/pet');

// Name Fucntion//
describe('constructor', () => {
    it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
    });
});

//Age test//

describe('constructor', () => {

    it('has a initial age of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.age).toEqual(0);
    });
});

//Grow Up function Test//

describe('growUp', () => {
    it('increments the age by 1', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7)
    });
});

// Walk Function //

describe('walk',() => {
    it('increases fitness level by 4', () => {
    const pet = new Pet('Fido');
    pet.fitness = 0;
    pet.walk();
    expect(pet.fitness).toEqual(4)
    
    });
});

// Feed Function //

describe('feed',() => {
    it('decreases hunger level by 3', () => {
    const pet = new Pet('Fido');
    pet.hunger = 3;
    pet.feed();
    expect(pet.hunger).toEqual(0)
    
    });
});


//Hunger Test//

describe('constructor', () => {

    it('has a initial hunger of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.hunger).toEqual(0);
    });
});

// Fitness Test //

describe('constructor', () => {

    it('has a initial fitness of 10', () => {
    const pet = new Pet('Fido');

    expect(pet.fitness).toEqual(10);
    });
});
