import { getRandomInteger } from '../utils/utils.js'

const Answers = {
  YES: 'yes',
  NO: 'no',
}

const isEven = (number) => !(number % 2)

class EvenGame {
  constructor(maxInteger = 50) {
    this.question = null
    this.answer = null
    this.maxInteger = maxInteger
  }

  // eslint-disable-next-line class-methods-use-this
  showRules() {
    console.log(`Answer "${Answers.YES}" if the number is even, otherwise answer "${Answers.NO}".`)
  }

  getQuestion() {
    this.question = getRandomInteger(1, this.maxInteger)
    this.answer = isEven(this.question) ? Answers.YES : Answers.NO

    return this.question
  }

  getAnswer() {
    return this.answer
  }

  isCorrectAnswer(userAnswer) {
    return userAnswer.toLowerCase() === this.answer
  }
}

export default EvenGame
