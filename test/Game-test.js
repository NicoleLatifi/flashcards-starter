const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

});
