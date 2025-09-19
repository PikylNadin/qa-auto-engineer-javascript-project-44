import playGame from '../index.js'
import generateRandom from '../utils.js'

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'
const maxNum = 100

const isEven = num => num % 2 === 0

const generateGameQuestion = () => {
  const question = generateRandom(1, maxNum)
  const correctAnswer = isEven(question) ? 'yes' : 'no'

  return {
    question: question,
    correctAnswer: correctAnswer,
  }
}

const playBrainEven = () => {
  playGame(generateGameQuestion, rule)
}

export default playBrainEven
