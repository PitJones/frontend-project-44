import { randomNumber, generalGameLogic } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  if (y !== 0) {
    const remainderDivisor = x % y;
    return gcd(y, remainderDivisor);
  }
  return x;
};

const gameLogic = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const result = gcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [String(result), question];
};

const findGCD = () => {
  generalGameLogic(gameDescription, gameLogic);
};

export default findGCD;
