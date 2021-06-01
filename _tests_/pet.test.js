const Pet = require('../src/pet');

let pet;
let child;

describe('constructor', () => {
    beforeAll(() => {
        child = new Pet (child)
    });
    
    beforeEach( ()=> {
        pet = new Pet('Fido');
    });
it('sets the name property', () => {
    expect(pet.name).toEqual('Fido');
    expect(pet.age).toEqual(0);
    expect(pet.hunger).toEqual(0);
    expect(pet.hunger).toEqual(0);
    expect(pet.fitness).toEqual(10);
    expect(pet.children).toEqual([])
    });

it('increments the age by 1 or returns error if pet is no longer alive', () => {
    pet.growUp();
    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7)

    pet.age = 30
    expect(()=> pet.growUp()).toThrow(pet.name+' is no longer alive :(')
    });
    
    it('increases fitness level by 4 or returns error is pet is no longer alive', () => {;
    pet.fitness = 1;
    pet.walk();
    expect(pet.fitness).toEqual(5)

    pet.age = 30
    expect(() => pet.walk()).toThrow(pet.name + ' is no longer alive :(');
    });

    it('decreases hunger level by 3 or throws an error is the pet is no longer alive', () => {
    pet.hunger = 3;
    pet.feed();
    expect(pet.hunger).toEqual(0);

    pet.age = 30;
        expect(() => pet.feed()).toThrow(pet.name+' is no longer alive :(');
    });

it('Returns string of pet status', () => {
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

    it("adds child to array of parent", () => {
    pet.adoptChild(child)
    expect(pet.children[0]).toEqual(child)
    });
});