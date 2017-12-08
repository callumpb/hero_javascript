const assert = require('assert');
const Food = require('../food.js')

describe('Food', function () {
  let food;

  beforeEach(function () {
    food = new Food('pizza', 5);
  });

  it('should have a name', function () {
    assert.strictEqual(food.name, 'pizza');
  });

  it('should have a replenishment amount', function () {
    assert.strictEqual(food.replenishment, 5);
  });

  
});
