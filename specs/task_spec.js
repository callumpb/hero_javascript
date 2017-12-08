const assert = require('assert');
const Task = require('../task.js');

describe('Task', function () {
  let task;

  beforeEach(function () {
    task = new Task('easy', 'urgent', 1000);
  });

  it('should have a difficulty', function () {
    assert.strictEqual(task.difficulty, 'easy');
  });

  it('should have an urgency level', function () {
    assert.strictEqual(task.urgency, 'urgent');
  });

  it('should have a reward', function () {
    assert.strictEqual(task.reward, 1000);
  });

});
