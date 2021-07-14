'use strict';

function getScript(buttonId, scrAdress) {
  document.getElementById(buttonId).onclick = function() {
    let script = document.createElement('script');
  
    script.setAttribute('src', scrAdress);
  
    document.body.appendChild(script);
  };
}

// Генерация скриптов для урока №1
getScript('onTask1-1', 'hw1/hw1-task1.js');
getScript('onTask1-2', 'hw1/hw1-task2.js');
getScript('onTask1-3', 'hw1/hw1-task3.js');

// Генерация скриптов для урока №2
getScript('onTask2-1', 'hw2/hw2-task1.js');
getScript('onTask2-2', 'hw2/hw2-task2.js');
getScript('onTask2-3', 'hw2/hw2-task3.js');
getScript('onTask2-4-5', 'hw2/hw2-task4-5.js');getScript('onTask2-6', 'hw2/hw2-task6.js');

// Генерация скриптов для урока №3
getScript('onTask3-1', 'hw3/hw3-task1.js');
getScript('onTask3-2', 'hw3/hw3-task2.js');
getScript('onTask3-3', 'hw3/hw3-task3.js');
getScript('onTask3-4', 'hw3/hw3-task4.js');
getScript('onTask3-5', 'hw3/hw3-task5.js');getScript('onTask3-6', 'hw3/hw3-task6.js');