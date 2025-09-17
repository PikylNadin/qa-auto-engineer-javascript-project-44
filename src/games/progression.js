import playGame from '../index.js';
import generateRandom from '../utils.js';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRoundData = () => {
  const start = generateRandom(1, 20);
  const step = generateRandom(2, 5);
  const hiddenElementIndex = generateRandom(0, progressionLength - 1);
  const progression = generateProgression(start, step, progressionLength);
  const answer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return {
    question,
    answer,
  };
};

const startGame = () => {
  playGame(generateRoundData, rule);
};

export default startGame;