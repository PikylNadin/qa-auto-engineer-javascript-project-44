import playGame from '../index.js';
import generateRandom from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  while (num2) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const generateRoundData = () => {
  const number1 = generateRandom(1, 100);
  const number2 = generateRandom(1, 100);
  const question = `${number1} ${number2}`;
  const answer = findGCD(number1, number2);

  return {
    question,
    answer,
  };
};

const startGame = () => {
  playGame(generateRoundData, rule);
};

export default startGame;
