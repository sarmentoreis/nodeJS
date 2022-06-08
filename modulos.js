//Biblioteca fs e chalk
const fs = require('fs');
const chalk = require('chalk');

function trataErro(erro){
    if(erro.code === "EISDIR")
        throw new Error(erro.code, "Erro no EISDIR.");
    if(erro.code === "ENOENT")
        throw new Error(erro.code, "Erro no ENOENT");
    else
        throw new Error(erro.code, "Erro genérico.");
}

//Função getFiles, utilizando async e await
async function getFilesAsyncAwait(caminho){
    const encoding = "utf-8";
    try {
        const texto = await fs.promises.readFile(caminho, encoding);
        console.log(chalk.green(texto));
    } catch (error) {
        trataErro(error);
    }
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

//Regex utilizando "/" no começo e fim + gm
function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    //const linksExtraidos = texto.match(regex);
    const arrayLinks = []
    let temp;
    while((temp = regex.exec(texto)) != null){
        arrayLinks.push({[temp[1]]: temp[2]});
    }
    return arrayLinks;
}

//Regex utilizando construtor new RegExp
function getDomain(texto){
    const regex = new RegExp("https?:\/\/[^\s$.?#].[^\/\s]*\/", 'gm');
    const protocolosEDominios = texto.match(regex);
    console.log(protocolosEDominios);
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

module.exports = {getFiles, getFilesAsync, getFilesAsyncAwait, extraiLinks, getDomain};