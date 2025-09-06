const convertToCelsius = function(num2) {
  let conversãoFParaC = (num2 - 32) * (5/9);
  return (parseFloat(conversãoFParaC.toFixed(1)));
};

const convertToFahrenheit = function(num) {
  let conversãoCParaF = num * (9/5) + 32;
  return (parseFloat(conversãoCParaF.toFixed(1)));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
