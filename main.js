"use strict";
// função de multiplicação que recebe como argumentos dois números e retornar a multiplicação deles
function multiplica(a, b) {
    return a * b;
}
console.log(multiplica(10, 20));
//função de saudação que recebe um nome e retornar a concatenação “Olá “ + nome;
function saudacao(nome) {
    return "Olá " + nome;
}
var nomeUsuario = "Gustavo Pitombeira!";
const mensagemSaudacao = saudacao(nomeUsuario);
console.log(mensagemSaudacao);
