import readlineSync from 'readline-sync'

const MAX_ANSWERS = 3
const Answers = {
  YES: 'yes',
  NO: 'no',
}

const getRandomInteger = (max = 100) => Math.floor(Math.random() * (max + 1))

const isEven = (number) => !(number % 2)

const gameRound = (name, correctAnswers = 0) => {
  if (correctAnswers === MAX_ANSWERS) {
    console.log(`Congratulations, ${name}!`)
    return null
  }
  const question = getRandomInteger()
  const answer = isEven(question) ? Answers.YES : Answers.NO

  console.log(`Question: ${question}`)
  const userAnswer = readlineSync.question('Your answer: ')

  if (userAnswer.toLowerCase() !== answer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`)
    return null
  }

  console.log('Correct!')
  return gameRound(name, correctAnswers + 1)
}

const evenGame = (name) => {
  console.log(`Answer "${Answers.YES}" if the number is even, otherwise answer "${Answers.NO}".`)

  gameRound(name)
}

export default evenGame
