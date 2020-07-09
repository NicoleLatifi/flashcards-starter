const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
// const Turn = require('../src/Turn');//new

class Game {
  constructor(round) {
    this.round = 0;
  }

  start() {
    let cardsCreated = [];
    for (var i = 0; i < prototypeQuestions.length; i++) {
      let card = new Card(prototypeQuestions[i]);
      cardsCreated.push(card);
    }
    const deck = new Deck(cardsCreated);
    // const turn = new Turn(guess, card);//new
    this.round = new Round(deck); //removed turn parameter
    this.printMessage(deck, this.round);
    this.printQuestion(this.round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
