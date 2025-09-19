import playGame from '../index.js'
import generateRandom from '../utils.js'

const rule = 'What number is missing in the progression?'
const progressionLength = 10
const minStart = 1
const maxStart = 20
const minStep = 2
const maxStep = 5

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRoundData = () => {
  const start = generateRandom(minStart, maxStart)
  const step = generateRandom(minStep, maxStep)
  const progression = generateProgression(start, step, progressionLength)
  const hiddenElementIndex = generateRandom(0, progression.length - 1)
  const correctAnswer = String(progression[hiddenElementIndex])
  progression[hiddenElementIndex] = '..'
  const question = progression.join(' ')

  return {
    question: question,
    correctAnswer: correctAnswer,
  }
}

const startGame = () => {
  playGame(generateRoundData, rule)
}

export default startGame
