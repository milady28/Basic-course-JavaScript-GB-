'use strict';
document.getElementById('onTask1').onclick = function() {
  let script = document.createElement('script');

  script.setAttribute('src', 'hw1/hw1-task1.js');

  document.body.appendChild(script);
};

document.getElementById('onTask2').onclick = function() {
  let script = document.createElement('script');

  script.setAttribute('src', 'hw1/hw1-task2.js');

  document.body.appendChild(script);
};

document.getElementById('onTask3').onclick = function() {
  let script = document.createElement('script');

  script.setAttribute('src', 'hw1/hw1-task3.js');

  document.body.appendChild(script);
};