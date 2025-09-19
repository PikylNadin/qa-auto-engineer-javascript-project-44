import playGame from '../index.js'
import generateRandom from '../utils.js'

const rule = 'Find the greatest common divisor of given numbers.'
const maxNum = 100

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1
  }
  return findGCD(num2, num1 % num2)
}

const generateRoundData = () => {
  const number1 = generateRandom(1, maxNum)
  const number2 = generateRandom(1, maxNum)
  const question = `${number1} ${number2}`
  const correctAnswer = String(findGCD(number1, number2))

  return {
    question: question,
    correctAnswer: correctAnswer,
  }
}

const startGame = () => {
  playGame(generateRoundData, rule)
}

export default startGame
