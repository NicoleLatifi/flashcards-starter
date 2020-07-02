const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data').prototypeData;

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be initialized with an array of card objects', function() {
    const card1 = data[0];
    const card2 = data[1];
    const card3 = data[2];

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards[0].id).to.equal(1);
    expect(deck.cards[1].question).to.equal("What is a comma-separated list of related values?");
    expect(deck.cards[2].correctAnswer).to.equal("mutator method");
  });

  it('should know how many cards it has', function() {
    const card1 = new Card(data[0]);
    const card2 = new Card(data[1]);
    const card3 = new Card(data[2]);

    const cardsCreated = [card1, card2, card3];

    const deck = new Deck(cardsCreated);
    // console.log(deck)

    expect(deck.countCards()).to.equal(3);
  });

});
