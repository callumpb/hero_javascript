const assert = require('assert');
const Hero = require('../hero.js');
// const Food = require('../food.js');
// const Task = require('../task.js');

describe('Hero', function () {
  let hero;
  // let food;
  // let task;

  beforeEach(function (){
    hero = new Hero('Kris', 100, 'Beetroot Soup');
    // food = new Food('');
    // task = new Task('');
  });

  it('should have a name', function () {
    assert.strictEqual(hero.name, 'Kris');
  });

  it('should have a health level', function () {
    assert.strictEqual(hero.health, 100);
  });

  it('should have a favourite food', function () {
    assert.strictEqual(hero.faveFood, 'Beetroot Soup');
  });


});
