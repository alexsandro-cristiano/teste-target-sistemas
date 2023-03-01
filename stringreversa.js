/**
 * 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
 */

function main(entrada) {
  let reverso = "";
  let tam = entrada.length - 1;
  for (i = tam; i >= 0; i--) {
    reverso += entrada[i];
  }
  return reverso;
}

console.log(main("!onaiP"));
