const _ = require('lodash');

const Task = function (name, difficulty, urgency, reward, completed) {
  this.name = name
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = false;
};

Task.prototype.isCompleted = function () {
  return this.completed;
};

module.exports = Task;
