// 1
let Tc = +prompt('Enter temperature in Celsius');
if (!isNaN(Tc)) {
  let Tf = (9 / 5) * Tc + 32;
  alert('Temperature in Fahrenheit is ' + Tf.toFixed(2));
} else {
  alert('Not a valid temperature');
}

// 2
let admin;
let name = 'Василий';
admin = name;
console.log(admin);

// 3

/*
1. складываем 10 и 10, получаем 20
2. складываем 20 и '10' получаем строку '2010'
*/
console.log(10 + 10 + '10');

/*
1. складываем 10 и '10' получаем строку '1010'
2. складываем '1010' и '10' получаем '101010'
*/
console.log(10 + '10' + 10);

/*
1. складываем 10 и 10, получаем 20
2. +'10' то же самое что Number('10'), поэтому 20 + 10 получаем 30
*/
console.log(10 + 10 + +'10');

/*
1. тут думаю js пустую строку воспринимает как 0, т.е. мы делим 10 на минус 0, получаем -Infinity
*/
console.log(10 / -"");

/*
1. 10 делим на NaN, получаем NaN
*/
console.log(10 / +"2,5");
