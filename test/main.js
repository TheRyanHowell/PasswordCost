var assert = require('chai').assert;
var PasswordCost = require('../lib/main.js').PasswordCost;

describe('PasswordCost', function() {
  var passwordCost = null;

  it('Constructs', function(done) {
    passwordCost = new PasswordCost(1000000000,5);
    assert.isOk(passwordCost);
    done();
  });


  it('Calculate "0"', function(done) {
    var result = passwordCost.calculate("0", true);
    assert.isOk(result);
    assert.equal(result, "0.0000000000");
    done();
  });

  it('Calculate "horse"', function(done) {
    var result = passwordCost.calculate("horse", true);
    assert.isOk(result);
    assert.equal(result, "0.0000000002");
    done();
  });


  it('Calculate "horsebattery"', function(done) {
    var result = passwordCost.calculate("horsebattery", true);
    assert.isOk(result);
    assert.equal(result, "0.0006652800");
    done();
  });

  it('Calculate "horsebatterystaple"', function(done) {
    var result = passwordCost.calculate("horsebatterystaple", true);
    assert.isOk(result);
    assert.equal(result, "8892.1857024000");
    done();
  });

  it('Calculate "horsebatterystapleapple"', function(done) {
    var result = passwordCost.calculate("horsebatterystapleapple", true);
    assert.isOk(result);
    assert.equal(result, "35905578804.0069166667");
    done();
  });
});
