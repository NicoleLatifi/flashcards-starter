const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const data = require('../src/data').prototypeData;

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should store a guess', function(){
    const card = new Card(data[0]);
    const turn = new Turn('object', card);

    expect(turn.guess).to.equal('object');
  });

  it('should be able to return a guess', function(){
    const card = new Card(data[0]);
    const turn = new Turn('object', card);

    expect(turn.returnGuess()).to.equal('object');
  });

  it('should be able to return a card', function(){
    const card = new Card(data[0]);
    const turn = new Turn('object', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate a guess', function(){
    const card = new Card(data[0]);
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);

    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should be able to give feedback', function(){
    const card = new Card(data[0]);
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);

    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });

});
