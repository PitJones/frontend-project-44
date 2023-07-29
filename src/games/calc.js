import { generateRandomNumber, generateRandomNumberInRange, runGeneralGameLogic } from '../index.js';

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

const getRandomOperator = () => {
  const firstIndex = 0;
  const randomIndexOperator = generateRandomNumberInRange(firstIndex, operators.length - 1);
  return operators[randomIndexOperator];
};

const runGameLogic = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const operator = getRandomOperator();
  const result = calculate(firstNumber, secondNumber, operator);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return [String(result), question];
};

const runCalcGame = () => runGeneralGameLogic(gameDescription, runGameLogic);

export default runCalcGame;
