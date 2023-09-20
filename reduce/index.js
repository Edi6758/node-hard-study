const numeros = [1, 2, 3, 4, 5];

// Somando números
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("A soma dos números é:", soma);

// Multiplicando números
const produto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log("O produto dos números é:", produto);

const palavras = ["Olá", "como", "vai", "você?"];

// Concatenando strings
const frase = palavras.reduce((acumulador, palavra) => acumulador + " " + palavra);
console.log("Frase formada:", frase);

const elementos = [1, 2, 3, 2, 4, 1, 2, 5, 5];

// Contando frequência de elementos
const frequencia = elementos.reduce((acumulador, elemento) => {
  acumulador[elemento] = (acumulador[elemento] || 0) + 1;
  return acumulador;
}, {});
console.log("Frequência de elementos:", frequencia);

const pessoas = [
  { nome: "Alice", idade: 25 },
  { nome: "Bob", idade: 30 },
  { nome: "Charlie", idade: 25 },
];

// Agrupando pessoas por idade
const pessoasAgrupadasPorIdade = pessoas.reduce((acumulador, pessoa) => {
  const idade = pessoa.idade;
  if (!acumulador[idade]) {
    acumulador[idade] = [];
  }
  acumulador[idade].push(pessoa.nome);
  return acumulador;
}, {});
console.log("Pessoas agrupadas por idade:", pessoasAgrupadasPorIdade);
