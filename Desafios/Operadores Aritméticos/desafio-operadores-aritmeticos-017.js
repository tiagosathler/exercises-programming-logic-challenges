/*

17 - Financiamento de veículo

Escreva um algoritmo para gerenciar as contas de um financiamento de veículo. 

A pessoa que quer fazer o financiamento precisa informar:

* o valor total do carro;
* o valor da entrada a ser dada;
* quantidade de parcelas que ela deseja pagar.

A loja em questão usa uma taxa de juros fixa de 5% sobre o valor do financiamento.

Desenvolva a solução e retorne conforme o exemplo (os valores monetários precisam ter 2 casas decimais após a virgula):

--------------------------------
Valor Financiado: R$35000,00;
Valor do Juros: R$1750,00;
Quantidade de Parcelas: 36;
Valor da Parcela: R$1020,83;
Valor Total do Carro: R$46750,00.
--------------------------------

*/

function carFinancing(carPrice, entranceValue, quota) {
  const financing = carPrice - entranceValue;
  const fees = financing * 0.05;
  const parcel = (financing * 1.05) / quota;
  const total = entranceValue + financing * 1.05;

  const feesString = fees.toFixed(2).replace(".", ",");
  const financingString = financing.toFixed(2).replace(".", ",");
  const parcelString = parcel.toFixed(2).replace(".", ",");
  const totalString = total.toFixed(2).replace(".", ",");
  return (
    `Valor Financiado: R$${financingString};\n` +
    `Valor do Juros: R$${feesString};\n` +
    `Quantidade de Parcelas: ${quota};\n` +
    `Valor da Parcela: R$${parcelString};\n` +
    `Valor Total do Carro: R$${totalString}.`
  );
}

module.exports = carFinancing;
