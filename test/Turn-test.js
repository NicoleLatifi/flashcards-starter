const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const card = new Card();
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

});
