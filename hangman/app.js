// Primitive values: string, number, boolean, null, undefined,

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function:: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const gameOne = new Hangman("Cat", 2);
const puzzleEl = document.querySelector("#puzzle");
const remainingGuessEl = document.querySelector("#remaining-guess");

puzzleEl.textContent = gameOne.Puzzle;
remainingGuessEl.textContent = gameOne.StatusMessage;

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  
  gameOne.makeGuess(guess);
  puzzleEl.textContent = gameOne.Puzzle;
  remainingGuessEl.textContent = gameOne.StatusMessage;
});
