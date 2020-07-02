const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data').prototypeData;

describe('Round', function() {
  var card1;
  var card2;
  var card3;
  var cardsCreated;
  var deck;
  var round;

  before(function() {
    card1 = new Card(data[0]);
    card2 = new Card(data[1]);
    card3 = new Card(data[2]);

    cardsCreated = [card1, card2, card3];

    deck = new Deck(cardsCreated);

    round = new Round(deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should recognize the current card', function() {
    expect(round.currentCard).to.equal(card1);
  });

});
