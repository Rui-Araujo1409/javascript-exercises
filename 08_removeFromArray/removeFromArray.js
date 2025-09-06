const removeFromArray = function(param1, ...param2) {
const resultado = param1.filter((item) => !param2.includes(item));
  return resultado;
};

// Do not edit below this line
module.exports = removeFromArray;
