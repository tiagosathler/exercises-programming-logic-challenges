/*

11 - Loja de ração

Escreva uma algoritmo para uma loja de ração que recebe o preço de um produto e retorna as formas de pagamentos disponíveis.

Considere as seguintes premissas:
* À vista possui 10% de desconto e parcelado em 4x possui juros de 15%.

Exemplo:
-------------------------------
Entrada: 
80

Saída:
"À Vista: R$72,00 ou 4x de: R$23,00"
-------------------------------

Obs: seguir o mesmo formato de retorno da mensagem de saída.

*/

function paymentOptions(price) {
  const spotPrice = price * 0.9;
  const termPrice = (price * 1.15) / 4;

  const style = {
    style: "currency",
    currency: "BRL",
  };

  const spotPriceCurrency = new Intl.NumberFormat("pt-BR", style).format(
    spotPrice
  );

  const termPriceCurrency = new Intl.NumberFormat("pt-BR", style).format(
    termPrice
  );

  return `À Vista: ${spotPriceCurrency} ou 4x de: ${termPriceCurrency}`;
}

module.exports = paymentOptions;
