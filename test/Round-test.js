const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data').prototypeData;

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should recognize the current card', function() {
    const card1 = new Card(data[0]);
    const card2 = new Card(data[1]);
    const card3 = new Card(data[2]);

    const cardsCreated = [card1, card2, card3];

    const deck = new Deck(cardsCreated);

    const round = new Round(deck);

    expect(round.currentCard).to.equal(card1);
  });

});
