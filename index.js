//Biblioteca Chalk
const chalk = require('chalk');
const { getFiles, getFilesAsync } = require('./modulos');

//Console.log - Testes
console.log(chalk.redBright("Testando o chalk.\n\n"));

//Testando função em modulos, getFiles.

getFilesAsync("./arquivos/texto1.md");
getFiles("./arquivos/texto1.md");