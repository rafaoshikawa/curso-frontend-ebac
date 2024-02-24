// array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

var alunos = [
  { nome: "João", nota: 5 },
  { nome: "Maria", nota: 6.5 },
  { nome: "Pedro", nota: 7.5 },
  { nome: "Ana", nota: 4 },
];

//• função criada  que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
function alunosAprovados(arrayDeAlunos) {
  var alunosAprovados = arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
  return alunosAprovados;
}
var alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);

