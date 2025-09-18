import playGame from '../index.js'
import generateRandom from '../utils.js'

const rule = 'What is the result of the expression?'

const operations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
}

const getOperator = () => {
  const operators = Object.keys(operations)
  const randomIndex = generateRandom(0, operators.length - 1)
  return operators[randomIndex]
}

const calc = (operator, num1, num2) => operations[operator](num1, num2)

const generateGameQuestion = () => {
  const maxNum = 100
  const num1 = generateRandom(1, maxNum)
  const num2 = generateRandom(1, maxNum)
  const operator = getOperator()
  const answer = String(calc(operator, num1, num2))

  return {
    question: `${num1} ${operator} ${num2}`,
    answer,
  }
}

const playBrainCalc = () => {
  playGame(generateGameQuestion, rule)
}

export default playBrainCalc
