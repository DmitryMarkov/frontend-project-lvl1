import { getRandomInteger } from '../utils/utils.js'

const Operations = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLICATION: '*',
}
class CalcGame {
  constructor(maxInteger = 50) {
    this.question = null
    this.answer = null
    this.maxInteger = maxInteger
  }

  // eslint-disable-next-line class-methods-use-this
  showRules() {
    console.log('What is the result of the expression?')
  }

  getQuestion() {
    const [number1, number2] = [
      getRandomInteger(1, this.maxInteger),
      getRandomInteger(1, this.maxInteger),
    ]
    const operation = Object
      .keys(Operations)[getRandomInteger(0, Object.keys(Operations).length - 1)]

    this.question = `${number1} ${Operations[operation]} ${number2}`

    switch (Operations[operation]) {
      case Operations.PLUS:
        this.answer = number1 + number2
        break
      case Operations.MINUS:
        this.answer = number1 - number2
        break
      case Operations.MULTIPLICATION:
        this.answer = number1 * number2
        break
      default:
        this.answer = null
    }

    return this.question
  }

  getAnswer() {
    return this.answer
  }

  isCorrectAnswer(userAnswer) {
    return Number.parseInt(userAnswer, 10) === this.answer
  }
}

export default CalcGame
