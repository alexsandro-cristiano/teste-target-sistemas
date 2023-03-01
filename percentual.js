/**
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de 
representação que cada estado teve dentro do valor total mensal da distribuidora.
 */

function main() {
  let fat_mensal_sp = 67836.43;
  let fat_mensal_rj = 36678.66;
  let fat_mensal_mg = 29229.88;
  let fat_mensal_es = 27165.48;
  let fat_mensal_outros = 19849.53;
  let fat_mensal_total =
    fat_mensal_sp +
    fat_mensal_rj +
    fat_mensal_mg +
    fat_mensal_es +
    fat_mensal_outros;

  let percent_sp = (fat_mensal_sp * 100) / fat_mensal_total;
  let percent_rj = (fat_mensal_rj * 100) / fat_mensal_total;
  let percent_mg = (fat_mensal_mg * 100) / fat_mensal_total;
  let percent_es = (fat_mensal_es * 100) / fat_mensal_total;
  let percent_outros = (fat_mensal_outros * 100) / fat_mensal_total;

  console.log("Percentual do estado SP:", percent_sp.toFixed(1),"%");
  console.log("Percentual do estado RJ:", percent_rj.toFixed(1), "%");
  console.log("Percentual do estado MG:", percent_mg.toFixed(1), "%");
  console.log("Percentual do estado ES:", percent_es.toFixed(1), "%");
  console.log("Percentual do estado OUTROS:", percent_outros.toFixed(1), "%");
}

main();
