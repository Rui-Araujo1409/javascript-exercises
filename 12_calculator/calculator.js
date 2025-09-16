const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, valor) => total + valor, 0);
};

const multiply = function(array) {
return array.reduce((total, valor) => total * valor, 1);
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
	 let cont = 1;
for(i=1; i<=num; i++) {
  cont *=i;
} return cont;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
