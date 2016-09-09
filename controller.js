"use strict"

import View from "./view"
import Model from "./model"

let prompt = require("prompt")
let request = require('request-promise');
let answerSchema = {properties:{answer:{description:"Guess",required:true}}}
let repeatSchema = {properties:{repeat:{description:"Y/N",required:true,pattern:/[ynYN]/}}}
let data = {
  questions: [],
  questionArr: [],
  questionCur: 0,
  guessCount: []
}

prompt.message = ""
prompt.delimiter = ":"
prompt.start();

class Controller {
  // Load data .JSON
  static load(filePath) {
    if (filePath.split('.').pop() != "json") {
      View.fileError()
      process.exit()
    } else {
      return Model.load(filePath)
    }
  }

  static start(filePath) {

    // Initialize variables
    data.questions = Controller.load(filePath)

    // Push into numGuess array
    for (let i = 0; i < data.questions.length; i++) {
      data.guessCount.push(0)
      data.questionArr.push(i)
    }

    // Ask question
    Controller.askQuestion(data)
  }

  // Ask questions
  static askQuestion(data) {
    if (data.questions.length > data.questionCur) {
      if (data.questionArr.indexOf(data.questionCur) != -1) {
        View.question(data)
        Controller.promptAnswer(data)
      } else {
        data.questionCur++
        Controller.askQuestion(data)
      }
    } else {
      Controller.repeatGame(data)
    }
  }

  // Prompt for user answer
  static promptAnswer(data) {
    prompt.get(answerSchema, function (err, result) {
      Controller.checkAnswer(data, result.answer)
    })
  }

  // Check user answer if correct
  static checkAnswer(data, answer) {

    // Increase number of guesses
    data.guessCount[data.questionCur]++

    // If answer is correct
    if(answer.toLowerCase() == data.questions[data.questionCur].term.toLowerCase()) {
      View.response(true, data)

      // Sleep for 800 ms
      Controller.sleep(800)

      // Go to next question
      data.questionCur++
      Controller.askQuestion(data)
    }

    // If answer is wrong
    else {
      View.response(false, data)
      Controller.promptAnswer(data)
    }
  }

  // Ask if want to repeat game with hardest questions repeated
  static repeatGame(data) {
    if (Math.max.apply(Math, data.guessCount) > 1) {

      // Ask if want repeat
      View.repeatGame(data.guessCount.indexOf(Math.max.apply(Math, data.guessCount)), Math.max.apply(Math, data.guessCount))

      // Prompt for user if want repeat
      Controller.promptRepeat(data, data.guessCount.indexOf(Math.max.apply(Math, data.guessCount)))
    } else {
      View.end()
    }
  }

  // Prompt for user answer
  static promptRepeat(data, question) {
    prompt.get(repeatSchema, function (err, result) {
      if (result.repeat.toLowerCase() == "y") {
        data.questionArr = [question]
        data.questionCur = 0
        data.guessCount = []
        for (let i = 0; i < data.questions.length; i++) {
          data.guessCount.push(0)
        }
        Controller.askQuestion(data)
      } else {
        View.end()
      }
    })
  }

  static sleep(milliseconds) {
    let start = new Date().getTime()
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break
      }
    }
  }
}

export default Controller
