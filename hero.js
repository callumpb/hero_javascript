const _ = require('lodash');

const Hero = function (name, health, faveFood) {
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.tasks = []
};

Hero.prototype.numberOfTasks = function () {
  return this.tasks.length;
};

Hero.prototype.talk = function () {
  return this.name;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};


Hero.prototype.taskName = function(name) {
  return _.find(this.tasks, function(task) {
    return task.name === name;
  });
};

// Hero.prototype.removeTask = function(name) {
//   return _.remove(this.tasks, function(task) {
//     // return task.name === name;
//   });
// };



module.exports = Hero;
