class Card {
  constructor(cardDetails) {
    this.id = cardDetails["id"];
    this.question = cardDetails["question"];
    this.answers = cardDetails["answers"];
    this.correctAnswer = cardDetails["correctAnswer"];
  }
}

module.exports = Card;
