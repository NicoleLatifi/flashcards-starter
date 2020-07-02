class Round{
  constructor(deck) {
    this.turns = 0;
    this.currentCard = deck.cards[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard = () => {
    return this.currentCard;
  }

  takeTurn = (turn, deck) => {
    this.turns++;
    this.currentCard = deck.cards[this.turns];
    turn.card = this.currentCard;
    turn.evaluateGuess();
    if (turn.guess !== turn.card.correctAnswer) {
      this.incorrectGuesses.push(this.turns);
    };
    turn.giveFeedback();
  }

  calculatePercentCorrect = () => {
    let numberOfCorrectGuesses = this.turns - this.incorrectGuesses.length;
    let percentCorrect = numberOfCorrectGuesses / this.turns
    return percentCorrect
  }

}

module.exports = Round;
