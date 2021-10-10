const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 80);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 50);
    dinosaur3 = new Dinosaur('coloradisaurus', 'omnivore', 20);

    velociraptor1 = new Dinosaur('velociraptor', 'carnivore', '60');
    velociraptor2 = new Dinosaur('velociraptor', 'carnivore', '55');

    dinosaurs = [dinosaur1, dinosaur2, dinosaur3];
    park = new Park('Isla Nublar', 50, dinosaurs)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Isla Nublar');
  });

  it('should have a ticket price', function(){
    const actual = park.ticket;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    const expected = dinosaurs;
    assert.strictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('Velociraptor', 'carnivore', 60);
    const actual = park.dinosaurs;
    const expected = dinosaurs;
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur('Velociraptor', 'carnivore', 60);
    park.removeDinosaur('Velociraptor', 'carnivore', 60);
    const actual = park.dinosaurs;
    const expected = dinosaurs;
    assert.deepEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    actual = park.findMostLovedDinosaur()
    expected = dinosaur1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(velociraptor1);
    park.addDinosaur(velociraptor2);
    actual = park.findBySpecies('velociraptor');
    expected = [velociraptor1, velociraptor2]
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    actual = park.totalVisitorsPerDay();
    expected = 150;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    actual = park.totalVisitorsPerYear();
    expected = 54750;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total revenue for one year', function(){
    actual = park.totalRevenueForOneYear();
    expected = 2737500;
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(velociraptor1);
    park.addDinosaur(velociraptor2);
    park.removeAllDinosaursOfParticularSpecies('velociraptor');
    actual = park.dinosaurs;
    expected = dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate number of dinosaurs by diet', function(){
    park.addDinosaur(velociraptor1);
    park.addDinosaur(velociraptor2);
    actual = { carnivore: 3, herbivore: 1, omnivore: 1 }
    expected = park.numberOfDinosaursByDiet();
    assert.deepStrictEqual(actual, expected);
  });

});
