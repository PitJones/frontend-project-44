import { randomNumber, generalGameLogic } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const randomOperator = () => {
  const randomIndexOperator = Math.floor(Math.random() * operators.length);
  return operators[randomIndexOperator];
};

const gameLogic = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const operator = randomOperator();
  const result = calculate(firstNumber, secondNumber, operator);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return [String(result), question];
};

const calcGame = () => generalGameLogic(gameDescription, gameLogic);

export default calcGame;
