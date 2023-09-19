// Vamos criar uma matriz de números inteiros.
const numeros = [1, 2, 3, 4, 5];

// Agora, vamos usar o método map() para criar uma nova matriz
// onde cada número será multiplicado por 2.
const numerosMultiplicadosPorDois = numeros.map(function(numero) {
  return numero * 2;
});

// Agora, a matriz 'numerosMultiplicadosPorDois' conterá [2, 4, 6, 8, 10].

// Você também pode usar uma função de seta (arrow function) para tornar o código mais conciso:
const numerosMultiplicadosPorDoisArrow = numeros.map(numero => numero * 2);

// A matriz 'numerosMultiplicadosPorDoisArrow' também conterá [2, 4, 6, 8, 10].

// Vamos imprimir as matrizes resultantes para verificar.
console.log(numerosMultiplicadosPorDois);  // [2, 4, 6, 8, 10]
console.log(numerosMultiplicadosPorDoisArrow);  // [2, 4, 6, 8, 10]
