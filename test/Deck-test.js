const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  });

//Maybe this is unnecessary? Maybe the Deck class doesn't actually need to hold all of the card details.
  it.skip('should be initialized with an array of card objects', function() {
    const card1 = new Card(data.prototypeData[0]["id"], data.prototypeData[0]["question"], data.prototypeData[0]["answers"], data.prototypeData[0]["correctAnswer"]);
    const card2 = new Card(data.prototypeData[1]["id"], data.prototypeData[1]["question"], data.prototypeData[1]["answers"], data.prototypeData[1]["correctAnswer"]);
    const card3 = new Card(data.prototypeData[2]["id"], data.prototypeData[2]["question"], data.prototypeData[2]["answers"], data.prototypeData[2]["correctAnswer"]);

    const cardsCreated = [card1, card2, card3];

    const deck = new Deck(cardsCreated);
    console.log(deck);

    expect(deck[0].id).to.equal(1);
    expect(deck[1].question).to.equal("What is a comma-separated list of related values?");
    expect(deck[2].correctAnswer).to.equal("mutator method");
  });

  it('should know how many cards it has', function() {
    const card1 = new Card(data.prototypeData[0]["id"], data.prototypeData[0]["question"], data.prototypeData[0]["answers"], data.prototypeData[0]["correctAnswer"]);
    const card2 = new Card(data.prototypeData[1]["id"], data.prototypeData[1]["question"], data.prototypeData[1]["answers"], data.prototypeData[1]["correctAnswer"]);
    const card3 = new Card(data.prototypeData[2]["id"], data.prototypeData[2]["question"], data.prototypeData[2]["answers"], data.prototypeData[2]["correctAnswer"]);

    const cardsCreated = [card1, card2, card3];

    const deck = new Deck(cardsCreated);

    expect(deck.countCards()).to.equal(3);
  });

});
