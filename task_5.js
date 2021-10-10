var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
var multiply = function (a, b) { return a * b; };
var divide = function (a, b) { return a / b; };


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return add(arg1, arg2);
        case '-':
            return subtract(arg1, arg2);
        case '*':
            return multiply(arg1, arg2);
        case '/':
            return divide(arg1, arg2);
        default:
            throw new Error('Wrong operation!')
    }
}

num1 = parseInt(prompt('Enter 1st number'));
num2 = parseInt(prompt('Enter 2nd number'));
operation = prompt('Enter operation')

try {
    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`${num1} ${operation} ${num2} =  ${mathOperation(num1, num2, operation)}`);
    } else {
        alert('Wrong data!')
    }
} catch (error) {
    alert('Wrong operation!')
}
