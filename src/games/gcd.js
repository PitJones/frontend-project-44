import { generateRandomNumber, runGeneralGameLogic } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (x, y) => {
  if (y !== 0) {
    const remainderDivisor = x % y;
    return calculateGCD(y, remainderDivisor);
  }
  return x;
};

const runGameLogic = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const result = calculateGCD(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [String(result), question];
};

const findGCD = () => {
  runGeneralGameLogic(gameDescription, runGameLogic);
};

export default findGCD;
