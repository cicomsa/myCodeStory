const words = ["hello", "word", "dress", "physics"]
const word = words[Math.floor(Math.random()*words.length)];
let letterArray = []

function showGuess(word, guesses) {
  guessArray = []
  splitWord = word.split("")
  splitWord.filter(n => guesses.indexOf(n) != -1 ? guessArray.push(n) : guessArray.push("_"))
  guessArray = guessArray.join(" ")
  return guessArray
}

function next(word, guesses) {

  const dashes = "_ ".repeat(word.length)
  let tries = 0

  function game() {
    letterArray += answer
    guessed = showGuess(word, letterArray)
    tries++
    if (guessed.indexOf("_") == -1 && tries <6) {
      window.alert("you won!")
    }
    else if (guessed.indexOf("_") >= 0 && tries >=6) {
      window.alert("you lost!")
    } else if (answer === word) {
      window.alert("you won")
    } else if (answer === 'exit') {
      window.alert("Game over")
    }
  }

  answer = window.prompt("Word to guess: "+ dashes+"\nInput letter or write 'exit' to end the game:")
    game()

  while (guessed.indexOf("_") >= 0 && tries <6) {
    answer = window.prompt("Word to guess: "+ guessed+ "\nInput letters: " + letterArray + "\nInput letter or write 'exit' to end the game:"  )
    game()
  }
}

next("hello", letterArray)
