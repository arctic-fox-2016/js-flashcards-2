"use strict"

class View {

  // Show wrong file load message
  static fileError() {
    console.log("\nPlease select a file with .json extension.\n")
  }

  // Show welcome message
  static intro() {
    console.log("\x1BcWelcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!")
    console.log(`\n==================================================\n`)
  }

  // Show question to user
  static question(data) {
    View.intro()
    console.log(`Definition #${data.questionCur + 1}`)
    console.log(data.questions[data.questionCur].definition + "\n")
  }

  // Show answer response
  static response(bin, data) {
    let numEnd = ""
    switch (data.guessCount[data.questionCur] % 10) {
      case 1: numEnd = "st"
      break
      case 2: numEnd = "nd"
      break
      case 3: numEnd = "rd"
      break
      default: numEnd = "th"
    }

    switch (bin) {
      case true:
      console.log(`\nCorrect!\nYou got this right on your ${data.guessCount[data.questionCur]}${numEnd} try\n`)
      break
      case false:
      View.intro()
      View.question(data)
      console.log(`Incorrect! Try Again\nThat was your ${data.guessCount[data.questionCur]}${numEnd} guess\n`)
    }
  }

  // Ask if want to repeat game
  static repeatGame(question, count) {
    View.intro()
    console.log(`The hardest question was Definition #${question + 1}, which you tried to answer ${count} times. Would you like to answer that question again?\n`)
  }

  // If no more questions
  static end() {
    console.log("Thank you for playing!\n")
  }
}

export default View
