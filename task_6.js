let addToAccount = parseInt(prompt('Введите зачисляемую сумму'));
numberOfDigits = String(addToAccount).length;
lastDigit = String(addToAccount).charAt(numberOfDigits - 1);
secondToLastDigit = String(addToAccount).charAt(numberOfDigits - 2);

if (secondToLastDigit == '1') {
    alert(`Ваша сумма в ${addToAccount} рублей успешно зачислена.`);
} else {
    switch (lastDigit) {
        case '0':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            alert(`Ваша сумма в ${addToAccount} рублей успешно зачислена.`);
            break;
        case '1':
            alert(`Ваша сумма в ${addToAccount} рубль успешно зачислена.`);
            break;
        case '2':
        case '3':
        case '4':
            alert(`Ваша сумма в ${addToAccount} рубля успешно зачислена.`);
            break;
        default:
            alert('Что-то пошло не так');
    }
}
