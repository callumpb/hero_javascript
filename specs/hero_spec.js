const assert = require('assert');
const Hero = require('../hero.js');
// const Food = require('../food.js');
const Task = require('../task.js');

describe('Hero', function () {
  let hero;
  // let food;
  let task;

  beforeEach(function (){
    hero = new Hero('Kris', 100, 'Beetroot Soup');
    // food = new Food('');
    task = new Task('Save world', 'easy', 'urgent', 1000, false);
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

  it('should start with no tasks', function () {
    assert.strictEqual(hero.numberOfTasks(), 0);
  });

  it('should be able to add a task', function () {
    hero.addTask();
    assert.strictEqual(hero.numberOfTasks(), 1);
  });

  // it('should be able to remove a task', function () {
  //   hero.addTask();
  //   hero.removeTask();
  //   assert.strictEqual(hero.numberOfTasks(), 0);
  // });

  it('should be able to find task by name', function() {
    hero.addTask(task);
    assert.strictEqual(hero.taskName('Save world'), task);
  });

  // it('should be able to remove task by name', function() {
  //   hero.addTask(task);
  //   hero.removeTask(task);
  //   assert.strictEqual(hero.removeTask('Save world'), task);
  // });

  it('should be able to talk/say own name', function () {
    assert.strictEqual(hero.talk(), 'Kris');
  });



});
