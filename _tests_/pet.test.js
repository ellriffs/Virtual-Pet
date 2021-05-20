const Pet = require('../src/pet');



// Constructor//
describe('constructor', () => {
    it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
    expect(pet.age).toEqual(0);
    expect(pet.hunger).toEqual(0);
    expect(pet.hunger).toEqual(0);
    expect(pet.fitness).toEqual(10);
    expect(pet.children).toEqual([])
    });
});

//Grow Up function Test//

describe('growUp', () => {
    it('increments the age by 1 or returns error if pet is no longer alive', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7)

    pet.age = 30
    expect(()=> pet.growUp()).toThrow(pet.name+' is no longer alive :(')
    });
});

// Walk Function //

describe('walk',() => {
    it('increases fitness level by 4 or returns error is pet is no longer alive', () => {
    const pet = new Pet('Fido');
    pet.fitness = 1;
    pet.walk();
    expect(pet.fitness).toEqual(5)

    pet.age = 30
    expect(() => pet.walk()).toThrow(pet.name + ' is no longer alive :(');
    
    });
});

// Feed Function //

describe('feed',() => {
    it('decreases hunger level by 3 or throws an error is the pet is no longer alive', () => {
    const pet = new Pet('Fido');
    pet.hunger = 3;
    pet.feed();
    expect(pet.hunger).toEqual(0);

    pet.age = 30;
        expect(() => pet.feed()).toThrow(pet.name+' is no longer alive :(');
    });
});


// Pet Status //
describe('CheckUp',() => {
    it('Returns string of pet status', () => {
    const pet = new Pet('Fido');
    pet.checkUp();

    pet.fitness = 10
    pet.hunger = 0
    expect(pet.checkUp()).toEqual("I feel great")
    
    pet.hunger = 6
    pet.fitness = 2
    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");

    pet.fitness = 2
    pet.hunger = 4
    expect(pet.checkUp()).toEqual("I need a walk")

    pet.fitness = 6
    pet.hunger = 6
    expect(pet.checkUp()).toEqual("I am hungry")

    pet.fitness = 0
    pet.hunger = 10
    expect(pet.checkUp()).toEqual(pet.name+' is no longer alive')

    });
}); 

describe('adoptChild', () => {
    it("adds child to array of parent", () => {
    const pet = new Pet ('Fido')
    const child = new Pet('child');
    pet.adoptChild(child)
        expect(pet.children[0]).toEqual(child)
    })
    })