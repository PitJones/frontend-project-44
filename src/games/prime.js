import { randomNumber, generalGameLogic } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  } return true;
};

const gameLogic = () => {
  let result;
  const question = randomNumber();
  const x = isPrime(question);
  if (x === true) {
    result = 'yes';
    return [String(result), question];
  } result = 'no';
  return [String(result), question];
};

const prime = () => {
  generalGameLogic(gameDescription, gameLogic);
};

export default prime;
