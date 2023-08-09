/*

02 - Calcular o salário 

Na sapataria do Faraó todas as pessoas da área de vendas recebem um salário fixo acrescido de 4% de comissão sobre as vendas. 

Escreva um algoritmo que receba o salário fixo de vendedores da sapataria do Faraó
e o valor de suas vendas,  calcule e retorne a comissão e seu salário final no formato:

---------------------------------------
"A comissão é: x e o ganho total é: y".
---------------------------------------

*/

function totalReceive(salary, sales){
  const commission = sales * 0.04;
  return `A comissão é: ${commission} e o ganho total é: ${salary + commission}`;
}

module.exports = totalReceive;
