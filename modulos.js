//Biblioteca fs e chalk
const fs = require('fs');
const chalk = require('chalk');

function trataErro(erro){
    if(erro.code === "EISDIR")
        throw new Error(erro.code, "Erro no EISDIR.");
    else
        throw new Error(erro.code, "Erro genérico.");
}

//Função getFiles, método assíncrono utilizando promises
function getFilesAsync(caminho){
    const encoding = "utf-8";
    fs.promises
    .readFile(caminho, encoding) // -> Lendo o arquivo no caminho recebido com a codificação utf-8
    .then((texto) => console.log(chalk.whiteBright(texto))) // -> Caso tenha sucesso, ENTÃO(then), será apresentando.
    .catch((erro) => trataErro(erro)) // -> Caso tenha erro, chamará o método trataErro.
    .finally(() => console.log(chalk.bgBlue.red.bold("\n\nFim de carregamento.\n\n"))) // -> Executa independente de dar sucesso ou erro.
}


//Função getFiles, método síncrono.
function getFiles(caminho){
    const encoding = "utf-8";
    fs.readFile(caminho, encoding, (erro, texto) =>{
        if(erro){
            trataErro();
        }
        console.log(chalk.yellowBright(texto));
    })
}

module.exports = {getFiles, getFilesAsync};