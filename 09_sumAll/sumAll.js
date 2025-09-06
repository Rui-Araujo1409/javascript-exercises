const sumAll = function(num1, num2) {
let lista = [];
  let erro = "ERROR";
  let resultado;
if(num1 < 0 || num2 < 0) {
  return erro;
} else if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
  return erro;  
  } else if(!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return erro;
} else {
  let iniciador;
let limite;
if(num1<num2){
  iniciador = num1;
limite = num2;
} else if(num1>num2) {
  iniciador = num2;
  limite = num1;
}

for(let i=iniciador; i<=limite; i++){
  lista.push(i);
resultado = lista.reduce((total, valor) => total + valor)
}
} return resultado;
};

// Do not edit below this line
module.exports = sumAll;
