/**
 * 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
 * faça um programa, na linguagem que desejar, 
 * 
 * que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. 
Estes dias devem ser ignorados no cálculo da média;
 */

const dados = require("./dados.json");
function main() {
  let maiorFaturamento = 0,
    menorFaturamento = 99999,
    somaTotalFaturamento = 0,
    media = 0,
    i = 0;
  const faturamento = dados.filter((info) => info.valor !== 0);

  while (i < faturamento.length) {
    if (faturamento[i].valor > maiorFaturamento) {
      maiorFaturamento = faturamento[i].valor;
    }
    if (faturamento[i].valor < menorFaturamento) {
      menorFaturamento = faturamento[i].valor;
    }
    somaTotalFaturamento += faturamento[i].valor;
    i++;
  }

  media = somaTotalFaturamento / faturamento.length;

  let cont = 0;
  i = 0;
  while (i < faturamento.length) {
    if (faturamento[i].valor > media) {
      cont++;
    }
    i++
  }
  return {
    "maiorFaturamento":maiorFaturamento,
    "menorFaturamento":menorFaturamento,
    "numeros de dias":cont,
  }
}
console.log(main())
