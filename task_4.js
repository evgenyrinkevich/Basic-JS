var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
var multiply = function (a, b) { return a * b; };
var divide = function (a, b) { return a / b; };


num1 = parseInt(prompt('Enter 1st number'));
num2 = parseInt(prompt('Enter 2nd number'));

alert(`${num1} + ${num2} =  ${add(num1, num2)}`);
alert(`${num1} - ${num2} =  ${subtract(num1, num2)}`);
alert(`${num1} * ${num2} =  ${multiply(num1, num2)}`);
alert(`${num1} / ${num2} =  ${divide(num1, num2).toFixed(4)}`);