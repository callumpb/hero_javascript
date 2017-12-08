const _ = require('lodash');

const Hero = function (name, health, faveFood) {
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.tasks = []
};

module.exports = Hero;
