'use strict';

/**
 * Функция генерации сообщений
 * @param {number} num сумма зачисления введенная пользователем
 * @param {string} string слово 'рубль' в правильном падеже
 * @returns сообщение о сумме вклада
 */
function message(num, string) {
  return alert('Ваша сумма в ' + num + ' ' + string + ' успешно зачислена');
}

/**
 * Функция проверки условия
 * @param {string} division остаток от деления
 * @param {number} num число для сравнения с остатком
 * @returns значение типа boolean о равенстве остатка и установленного числа
 */
function compare(division, num) {
  return division == num;
}

let userNum = +prompt('Введите сумму зачисления на счет (рублей)');
let divHand = userNum % 100;
let divDec = userNum % 10;

if (compare(divHand, 11) || compare(divHand, 12) || compare(divHand, 13) || compare(divHand, 14)) {
  message(userNum, 'рублей')
} else if (compare(divDec, 1)) {
  message(userNum, 'рубль');
} else if (compare(divDec, 2) || compare(divDec, 3) || compare(divDec, 4)) {
  message(userNum, 'рубля');
} else {
  message(userNum, 'рублей');
}