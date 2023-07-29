import { generateRandomNumber, generateRandomNumberInRange, runGeneralGameLogic } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getArrayProgression = (length, firstNumber, stepProgression) => {
  const massivProgression = [];
  let currentNumber = firstNumber;
  for (let i = 0; i < length; i += 1) {
    massivProgression.push(currentNumber);
    currentNumber += stepProgression;
  }
  return massivProgression;
};

const getRandomIndexMassiv = (massiv) => {
  const firstIndex = 0;
  const indexMassiv = generateRandomNumberInRange(firstIndex, massiv.length);
  return indexMassiv;
};

const runGameLogic = () => {
  const lowerLimitForLength = 5;
  const lowerLimitForStepProgression = 2;
  const upperLimit = 10;
  const length = generateRandomNumberInRange(lowerLimitForLength, upperLimit);
  const firstNumber = generateRandomNumber();
  const stepProgression = generateRandomNumberInRange(lowerLimitForStepProgression, upperLimit);
  const arrayProgression = getArrayProgression(length, firstNumber, stepProgression);
  const indexForSwap = getRandomIndexMassiv(arrayProgression);
  const result = arrayProgression[indexForSwap];
  arrayProgression[indexForSwap] = '..';
  const question = arrayProgression.join(' ');
  return [String(result), question];
};

const runGameProgression = () => {
  runGeneralGameLogic(gameDescription, runGameLogic);
};

export default runGameProgression;
