/* eslint-env es6 */
/* eslint-disable no-console */
/* eslint-disable */

document.addEventListener('DOMContentLoaded', function () {
  const display = document.querySelector('#display');
  const buttons = document.querySelectorAll('button');

  buttons.forEach((item) => {
    item.onclick = () => {
      if (item.id === 'clear') {
        display.innerText = ''; // Clear display
      } 
      else if (item.id === 'backspace') {
        let string = display.innerText;
        display.innerText = string.substr(0, string.length - 1); // Remove last character
      } 
      else if (display.innerText !== '' && item.id === 'equal') {
        try {
          display.innerText = eval(display.innerText); // Calculate result
        } catch (e) {
          display.innerText = 'Error'; // Handle invalid input
        }
      } 
      else {
        display.innerText += item.id; // Append button value to display
      }
    };
  });
});
