const assert = require('assert');
const Task = require('../task.js');

describe('Task', function () {
  let task;
  // let task2

  beforeEach(function () {
    task = new Task('save world', 'hard', 'urgent', 1000, false);
    task2 = new Task('destroy world', 'easy', 'not urgent', -1000, false);
  });

  it('should have a name', function () {
    assert.strictEqual(task.name, 'save world');
  });

  it('should have a difficulty', function () {
    assert.strictEqual(task.difficulty, 'hard');
  });

  it('should have an urgency level', function () {
    assert.strictEqual(task.urgency, 'urgent');
  });

  it('should have a reward', function () {
    assert.strictEqual(task.reward, 1000);
  });

  it('should be able to be marked as completed', function () {
    assert.strictEqual(task.isCompleted(), false);
  });

});
