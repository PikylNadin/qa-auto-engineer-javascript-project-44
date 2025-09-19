import readlineSync from 'readline-sync'
import greetUser from './cli.js'

const roundsNum = 3

const playGame = (gameQuestionFunc, gameRule) => {
  const userName = greetUser()
  console.log(gameRule)

  for (let i = 0; i < roundsNum; i += 1) {
    const { question, correctAnswer } = gameQuestionFunc()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export default playGame
