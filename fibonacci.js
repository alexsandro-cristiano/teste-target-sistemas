/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o
próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
 ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function main(entrada) {
  let penultimo = 0,
    ultimo = 1;
  let nextTermo = 0;

  if (entrada < 0) {
    return "o número informado não pertence a sequência.";
  }
  if (entrada == 0 || entrada == 1) {
    return "o número informado pertence a sequência.";
  }

  while (nextTermo < entrada) {
    nextTermo = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = nextTermo;
    if (entrada === nextTermo) {
      return "o número informado pertence a sequência.";
    }
  }
  return "o número informado não pertence a sequência.";
}
console.log(main(21));
