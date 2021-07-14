'use strict';

function getScript(buttonId, scrAdress) {
  document.getElementById(buttonId).onclick = function() {
    let script = document.createElement('script');
  
    script.setAttribute('src', scrAdress);
  
    document.body.appendChild(script);
  };
}

getScript('onTask3-1', 'hw3/hw3-task1.js');
getScript('onTask3-2', 'hw3/hw3-task2.js');
getScript('onTask3-3', 'hw3/hw3-task3.js');
getScript('onTask3-4', 'hw3/hw3-task4.js');
getScript('onTask3-5', 'hw3/hw3-task5.js');getScript('onTask3-6', 'hw3/hw3-task6.js');