'use strict';

function numToObject(num) {
    if (Number.isInteger(num) && num >= 0 && num <= 999) {
        let numObject = {};
        numObject.digits = num % 10;
        num -= numObject.digits;
        numObject.tens = parseInt((num % 100) / 10);
        num -= numObject.tens;
        numObject.hundreds = parseInt(num / 100);
        console.log(numObject);
        return numObject;
    }
    console.log('Wrong data');
    return {};
}

let num = +prompt('Enter a number between 0 and 999');
numToObject(num);