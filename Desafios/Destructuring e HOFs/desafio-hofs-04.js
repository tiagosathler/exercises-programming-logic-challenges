const data = require("./data");

// 4 - Filtre e retorne um array apenas com o nome das bandas que são dos Estados Unidos

const usaFilter = () => {
  return data.bands
    .filter(
      ({ country }) => country === "United States" || country === "England"
    )
    .map(({ bandName }) => bandName);
};

module.exports = usaFilter;
