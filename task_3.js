/**
 * работает по следующему принципу:
 * если a и b положительные, вывести их разность;
 * если а и b отрицательные, вывести их произведение;
 * если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом
 * @param  {} a первое число
 * @param  {} b второе число
 */
function mathOperation(a, b) {
    if (a >= 0 && b >= 0) {
        return Math.abs(a - b)
    }
    if (a < 0 && b < 0) {
        return a * b
    }
    return a + b
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}


num1 = getRandomInt(-100, 101);
num2 = getRandomInt(-100, 101);
alert(`1ое число  ${num1}, 2ое число ${num2}, результат  ${mathOperation(num1, num2)}`)