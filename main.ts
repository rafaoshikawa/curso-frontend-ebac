// função de multiplicação que recebe como argumentos dois números e retornar a multiplicação deles

function multiplica(a: number, b: number): number {
  return a * b;
}

console.log(multiplica(10, 20));

//função de saudação que recebe um nome e retornar a concatenação “Olá “ + nome;

function saudacao(nome: string) {
  return "Olá " + nome;
}

var nomeUsuario: string = "Gustavo Pitombeira!";
const mensagemSaudacao: string = saudacao(nomeUsuario);
console.log(mensagemSaudacao);
