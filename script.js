"use strict";

function removeChars(inputString, charsToRemove) {
  if (typeof inputString !== 'string') {
    alert('Invalid input: the first argument must be a string.');
    return inputString;
  }

  if (!Array.isArray(charsToRemove)) {
    alert('Invalid input: the second argument must be an array of characters.');
    return inputString;
  }

  for (let i = 0; i < charsToRemove.length; i++) {
    if (typeof charsToRemove[i] !== 'string' || charsToRemove[i].length !== 1) {
      alert('Invalid input: all elements in the second argument must be single characters.');
      return inputString;
    }
  }

  const regex = new RegExp('[' + charsToRemove.join('') + ']', 'g');
  return inputString.replace(regex, '');
}

const userInput = prompt("Enter a string:", "");
if (userInput === null) {
  alert("Input canceled.");
} else {
  const charsToRemoveInput = prompt("Enter characters to remove (separated by commas):", "");
  if (charsToRemoveInput === null) {
    alert("Input canceled.");
  } else {

    const charsToRemove = charsToRemoveInput.split(',').map(char => char.trim()).filter(char => char !== '');
    const result = removeChars(userInput, charsToRemove);
    alert(`Result: ${result}`);
  }
}





