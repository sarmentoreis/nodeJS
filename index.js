//Biblioteca Chalk
const chalk = require('chalk');
const { getFiles, getFilesAsync, getFilesAsyncAwait, extraiLinks, getDomain } = require('./modulos');

//Console.log - Testes
console.log(chalk.redBright("Testando o chalk.\n\n"));

//Testando função em modulos, getFiles.

//getFilesAsync("./arquivos/texto1.md");
//getFiles("./arquivos/texto1.md");
//getFilesAsyncAwait("./arquivos/texto1.md");

//Testando função extraiLinks

const texto = "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)"

extraiLinks(texto);

//getDomain(texto);