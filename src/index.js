import readlineSync from 'readline-sync';

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const name = greetingUser();

const randomNumber = () => {
  const number = Math.round(Math.random() * 100);
  return number;
};

const randomNumberInRange = (min, max) => Math.round(Math.random() * (max - min) + min);

const numberOfRounds = 3;
const generalGameLogic = (gameDescription, gameLogic) => {
  console.log(gameDescription);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [rightAnswer, question] = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}`);
      return;
    }
  } console.log(`Congratulation, ${name}`);
};

export { randomNumberInRange, randomNumber, generalGameLogic };
