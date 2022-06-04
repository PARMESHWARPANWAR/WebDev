let chalk = require('chalk');
let figlet = require('figlet');
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.bold('Hello world!'));
// console.log(chalk.underline('Hello world!'));
// console.log(chalk.red('Hello world!'));
// console.log(chalk.bgBlueBright('Hello world!'));

console.log(figlet.textSync("Hello World!"));

console.log(chalk.red(figlet.textSync("# CODE")));

// https://nodejs.dev/learn
