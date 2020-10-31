let game;
const puzzleEl = document.querySelector("#puzzle");
const remainingGuessEl = document.querySelector("#remaining-guess");

const render = () => {
  puzzleEl.textContent = game.Puzzle;
  remainingGuessEl.textContent = game.StatusMessage;
};

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);

  game.makeGuess(guess);

  render();
});

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("2")
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// getCurrentCountry().then((country) => {
//   console.log(country)
// }).catch((err) => {
//   console.log(err)
// })

// Notes
// Primitive values: string, number, boolean, null, undefined,

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function:: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null