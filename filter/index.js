// Exemplo 1: Filtrar números pares de uma matriz
const numeros = [1, 2, 3, 4, 5, 6];

// Usando o método filter para criar um novo array (numerosPares)
// com números que são pares (passam na condição numero % 2 === 0)
const numerosPares = numeros.filter(numero => numero % 2 === 0);

// Imprime o novo array com números pares
console.log(numerosPares); // Saída: [2, 4, 6]

// Exemplo 2: Filtrar strings com mais de 5 caracteres de uma matriz
const palavras = ["maçã", "banana", "laranja", "uva", "abacaxi"];

// Usando o método filter para criar um novo array (palavrasLongas)
// com strings que têm mais de 5 caracteres (passam na condição palavra.length > 5)
const palavrasLongas = palavras.filter(palavra => palavra.length > 5);

// Imprime o novo array com palavras longas
console.log(palavrasLongas); // Saída: ["laranja", "abacaxi"]

// Exemplo 3: Filtrar objetos com base em uma condição
const pessoas = [
  { nome: "Alice", idade: 25 },
  { nome: "Bob", idade: 30 },
  { nome: "Carol", idade: 22 },
];

// Usando o método filter para criar um novo array (pessoasJovens)
// com objetos que têm idade menor que 30 (passam na condição pessoa.idade < 30)
const pessoasJovens = pessoas.filter(pessoa => pessoa.idade < 30);

// Imprime o novo array com pessoas jovens
console.log(pessoasJovens); // Saída: [{ nome: "Alice", idade: 25 }, { nome: "Carol", idade: 22 }]
