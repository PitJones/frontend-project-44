import { randomNumber, randomNumberInRange, generalGameLogic } from '../index.js';

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

const randomIndexMassiv = (massiv) => {
  const indexMassiv = Math.floor(Math.random() * massiv.length);
  return indexMassiv;
};

const gameLogic = () => {
  const length = randomNumberInRange(5, 10);
  const firstNumber = randomNumber();
  const stepProgression = randomNumberInRange(2, 10);
  const arrayProgression = getArrayProgression(length, firstNumber, stepProgression);
  const indexForSwap = randomIndexMassiv(arrayProgression);
  const result = arrayProgression[indexForSwap];
  arrayProgression[indexForSwap] = '..';
  const question = `${arrayProgression}`;
  return [String(result), question];
};

const progression = () => {
  generalGameLogic(gameDescription, gameLogic);
};

export default progression;
