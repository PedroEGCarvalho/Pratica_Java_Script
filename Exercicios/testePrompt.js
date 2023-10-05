const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let soma = 0;

  for(let i = 0; i<10;i++)
  {

  readline.question('Who are you?', a => {
    soma += $[a];
    readline.close();
  });
  }
  /*const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);*/
