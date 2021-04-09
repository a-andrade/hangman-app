const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')

const game1 = new Hangman('Cat', 2)

puzzleElement.textContent = game1.getPuzzle()
guessesElement.textContent = game1.remainingGuesses
console.log(game1.status)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)

    puzzleElement.textContent = game1.getPuzzle()
    guessesElement.textContent = game1.remainingGuesses
    console.log(game1.status)
})