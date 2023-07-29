import { generateRandomNumber, runGeneralGameLogic } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const runGameLogic = () => {
  const number = generateRandomNumber();
  const result = isEvenNumber(number) ? 'yes' : 'no';
  return [String(result), number];
};

const runEvenGame = () => {
  runGeneralGameLogic(gameDescription, runGameLogic);
};

export default runEvenGame;
