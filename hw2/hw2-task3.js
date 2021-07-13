'use strict';

/**
 * Функция получения случайного положительного или отрицательного числа
 * @returns случайное число от 0 до 100
 */
function getRandomNum () {
  return ((Math.random() < 0.5) ? -1 : 1) * parseInt(Math.random() * 100);
}

let a = getRandomNum();
let b = getRandomNum();
let result = 0;

if (a && b >= 0) {
  result = a - b;
} else if (a && b < 0) {
  result = a * b;
} else {
  result = a + b;
}

alert(result);
