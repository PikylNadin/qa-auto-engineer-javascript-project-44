import playGame from '../index.js';
import generateRandom from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateGameQuestion = () => {
  const maxRandomInt = 100;
  const question = generateRandom(1, maxRandomInt);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

const playBrainEven = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainEven;
