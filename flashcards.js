'use strict'
// write your code here
import View from './view.js'
import Controller from './controller.js'
const fs = require ('fs')
const readline = require ('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class Flashcards {

  main () {
    rl.question('Tekan enter untuk mulai main ?\n',(ans) => {
       if (ans === "") {
           Controller.questions(fs, "social.json")
           Controller.playGame(rl)
        } else {
           rl.close()
        }
      })

      }
  }

View.title()
let play = new Flashcards()
play.main()
