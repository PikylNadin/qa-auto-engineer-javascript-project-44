import playGame from '../index.js';
import generateRandom from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minRandomInt = 1;
const maxRandomInt = 100;

const isPrime = positiveInt => {
  if (positiveInt <= 1) {
    return false;
  };
  for (let i = 2; i <= Math.sqrt(positiveInt); i += 1) {
    if (positiveInt % i === 0) {
      return false;
    };
  };
  return true;
};

const generateGameQuestion = () => {
  const question = generateRandom(maxRandomInt, minRandomInt);
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

const playBrainPrime = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainPrime;
