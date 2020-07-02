const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const data = require('../src/data').prototypeData;

describe('Round', function() {
  var card1;
  var card2;
  var card3;
  var cardsCreated;
  var deck;
  var round;
  var turn;

  beforeEach(function() {
    card1 = new Card(data[0]);
    card2 = new Card(data[1]);
    card3 = new Card(data[2]);

    cardsCreated = [card1, card2, card3];

    deck = new Deck(cardsCreated);

    round = new Round(deck);

    turn = new Turn('object', card1);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should recognize the current card', function() {

    expect(round.currentCard).to.equal(card1);
  });

  it('should return the current card', function() {

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update the turns count', function() {

    round.takeTurn(turn, deck);

    expect(round.turns).to.equal(1);
  });

  it('should make the next card becomes the current card', function() {

    round.takeTurn(turn, deck);

    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should evaluate a guess', function() {

    round.takeTurn(turn, deck);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should store incorrect guesses', function() {
    round.takeTurn(turn, deck);

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should give feedback', function() {
    round.takeTurn(turn, deck);

    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

  it('should calculate the percentage of correct guesses', function() {
    round.takeTurn(turn, deck);

    expect(round.calculatePercentCorrect()).to.equal(0);
  });

});
