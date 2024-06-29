const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(num) {
  /*
  if(num === 0) return 1;
  let prod = 1;
  for(let i = num; i > 0; i--){
    prod *= i;
  }
  return prod;
  */
  if(num === 0) return 1;
  return num <= 1 ? 1 : num * factorial(num - 1);
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