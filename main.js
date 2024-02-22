

// Classe Pessoa
function Pessoa(nome, idade, cidade) {
  this.nome = nome;
  this.idade = idade;
  this.cidade = cidade;

  // Método dentro do construtor
  this.saudacao = function () {
    console.log(`Olá, meu nome é ${this.nome} e eu moro em ${this.cidade}.`);
  };
}

// Classe Estudante que herda de Pessoa
function Estudante(nome, idade, cidade, curso) {
  Pessoa.call(this, nome, idade, cidade); // Herda propriedades da classe Pessoa
  this.curso = curso;

  // Novo método para Estudante
  this.estudar = function () {
    console.log(`${this.nome} está estudando ${this.curso}.`);
  };
}

// Classe Trabalhador que herda de Pessoa
function Trabalhador(nome, idade, cidade, profissao) {
  Pessoa.call(this, nome, idade, cidade); // Herda propriedades da classe Pessoa
  this.profissao = profissao;

  // Novo método para Trabalhador
  this.trabalhar = function () {
    console.log(`${this.nome} está trabalhando como ${this.profissao} atualmente.`);
  };
}

// Criando instâncias das novas classes
const estudante1 = new Estudante("Alice", 20, "São Paulo", "Engenharia");
const estudante2 = new Estudante("Rafael", 25, "Brasilia", "Arquitetura");
const trabalhador1 = new Trabalhador("Pedro", 35, "Minas Gerais", "Engenheiro");
const trabalhador2 = new Trabalhador("Rafael", 35, "Minas Gerais", "Administrador");



// Testando métodos das novas classes
estudante1.saudacao();  // Métodos da classe Pessoa
estudante1.estudar();    // Método específico da classe Estudante
estudante2.saudacao();  // Métodos da classe Pessoa
estudante2.estudar();    // Método específico da classe Estudante
trabalhador2.trabalhar();  // Método específico da classe Trabalhador




trabalhador1.saudacao();   // Métodos da classe Pessoa
trabalhador1.trabalhar();  // Método específico da classe Trabalhador

