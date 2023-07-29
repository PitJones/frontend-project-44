import { generateRandomNumber, runGeneralGameLogic } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const runGameLogic = () => {
  const question = generateRandomNumber();
  const result = isPrime(question) ? 'yes' : 'no';
  return [result, question];
};

const runPrimeGame = () => {
  runGeneralGameLogic(gameDescription, runGameLogic);
};

export default runPrimeGame;
