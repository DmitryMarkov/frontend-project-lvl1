import readlineSync from 'readline-sync'

const MAX_ROUNDS = 3

const gameRound = (name, game, round = 0) => {
  if (round === MAX_ROUNDS) {
    console.log(`Congratulations, ${name}!`)
    return null
  }

  const question = game.getQuestion()

  console.log(`Question: ${question}`)
  const userAnswer = readlineSync.question('Your answer: ')

  if (!game.isCorrectAnswer(userAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${game.getAnswer()}'.\nLet's try again, ${name}!`)
    return null
  }

  console.log('Correct!')
  return gameRound(name, game, round + 1)
}

const brainGame = (name, game) => {
  game.showRules()
  gameRound(name, game)
}

export default brainGame
