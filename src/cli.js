import readlineSync from 'readline-sync';

const greetingUser = () => {
  console.log('Welcone to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greetingUser;
