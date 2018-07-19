var exports = module.exports = {};

import * as math from 'mathjs'

class PasswordCost  {
  constructor(hashPerSecond, hourlyCost) {
    this.hashRate = math.bignumber(hashPerSecond);
    this.hashRatePerHour = math.multiply(hashPerSecond, 3600);
    this.hourlyCost = math.bignumber(hourlyCost);
    this.costPerSecond = math.bignumber(math.divide(this.hourlyCost, 3600));
    this.hashesPerCost = math.bignumber(math.divide(this.costPerSecond, this.hashRate));
  }

  calculate(password) {
    var permutations = math.bignumber(math.permutations(password.length));
    var guess = math.multiply(permutations, this.hashesPerCost);
    guess = math.format(guess, {notation: 'fixed', precision: 10});

    return guess;
  }
}

exports.PasswordCost = PasswordCost;
