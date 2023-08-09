/*

13 - Cor aleatória

Elabore uma função que retorne uma cor RGB aleatória no formato:
--------------
"rgb(r, g, b)"
--------------

 */

const generate = () => Math.floor(Math.random() * 256);

function generateColor() {
  const red = generate();
  const green = generate();
  const blue = generate();
  return `rgb(${red}, ${green}, ${blue})`;
}

module.exports = generateColor;
