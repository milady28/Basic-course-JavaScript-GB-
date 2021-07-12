'use strict';
/*
1. к 10 прибавляем 10 получается 20
2. к 20 прибавляем строку '10', происходит конкатенация (число 20 приводится к строковому типу)
3. результат присваиваем в переменную result1
4. выводим итоговый результат в консоль
*/
let result1 = 10 + 10 + '10';
console.log(result1);

/*
1. к 10 прибавляем строку '10', происходит конкатенация (первое слагаемое 10 приводится к строковому типу)
2. к строке '1010' прибавляем строку '10', происходит конкатенация (второе слагаемое 10 приводится к строковому типу)
3. результат присваиваем в переменную result2
4. выводим итоговый результат в консоль
*/
let result2 = 10 + '10' + 10;
console.log(result2);

/*
1. к 10 прибавляем 10 получается 20
2. унарный плюс приводит строку '10' к числовому типу
2. к 20 прибавляем число 10
3. результат присваиваем в переменную result3
4. выводим итоговый результат в консоль
*/
let result3 = 10 + 10 + +'10';
console.log(result3);

/*
1. унарный минус преобразует пустую строку в число -0,
2. деление на -0 равняется -бесконечности
3. результат присваиваем в переменную result4
4. выводим итоговый результат в консоль
*/
let result4 = 10 / -"";
console.log(result4);

/*
1. унарный + не может преобразовать строку '2,5' в число, поскольку стоит запятая вместо точки
2. результатом деления на NaN является NaN
3. результат присваиваем в переменную result5
4. выводим итоговый результат в консоль
*/
let result5 = 10 / +"2,5";
console.log(result5);