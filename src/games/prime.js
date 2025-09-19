import playGame from '../index.js'
import generateRandom from '../utils.js'

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const minNum = 0
const maxNum = 100

const isPrime = (num) => {
  if (num <= 1) {
    return false
  }

  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

const generateGameQuestion = () => {
    const question = generateRandom(minNum, maxNum)
    const correctAnswer = isPrime(question) ? 'yes' : 'no'

    return {
      question: question,
      correctAnswer: correctAnswer,
    }
  }

const playBrainPrime = () => {
  playGame(generateGameQuestion, rule)
}

export default playBrainPrime
