'use strict';

/**
 * Функция получения случайного числа
 * @returns случайное число от 0 до 100
 */
 function getRandomNum () {
  return parseInt(Math.random() * 100);
}

/**
 * Функция сложения с двумя аргументами
 * @param {number} a первый аргумент
 * @param {number} b второй аргумент
 * @returns сумму двух аргументов a и b
 */
function addition (a, b) {
  return a + b;
}

/**
 * Функция вычитания с двумя аргументами
 * @param {number} a первый аргумент
 * @param {number} b второй аргумент
 * @returns разница двух аргументов a и b
 */
function subtraction (a, b) {
  return a - b;
}

/**
 * Функция умножения с двумя аргументами
 * @param {number} a первый аргумент
 * @param {number} b второй аргумент
 * @returns произведение двух аргументов a и b
 */
function multiplication (a, b) {
  return a * b;
}

/**
 * Функция деления с двумя аргументами
 * @param {number} a первый аргумент
 * @param {number} b второй аргумент
 * @returns частное двух аргументов a и b
 */
function division (a, b) {
  return a / b;
}

/**
 *  Функция определения математической операции с двумя аргументами
 * @param {number} arg1 первый аргумент
 * @param {number} arg2 второй аргумент
 * @param {string} operation функция математической операции +, -, *, /
 * @returns 
 */
function mathOperation(arg1, arg2, operation) {
  return operation(arg1, arg2);
}

let ramdomNum1 = getRandomNum();
let randomNum2 = getRandomNum();

console.log(mathOperation(ramdomNum1, randomNum2, addition));
console.log(mathOperation(ramdomNum1, randomNum2, subtraction));
console.log(mathOperation(ramdomNum1, randomNum2, multiplication));
console.log(mathOperation(ramdomNum1, randomNum2, division));