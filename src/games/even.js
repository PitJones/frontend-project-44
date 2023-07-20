import { randomNumber, generalGameLogic } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const itEvenNumber = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const gameLogic = () => {
  const number = randomNumber();
  const result = itEvenNumber(number);
  const question = `${number}`;
  return [String(result), question];
};

const even = () => {
  generalGameLogic(gameDescription, gameLogic);
};

export default even;
