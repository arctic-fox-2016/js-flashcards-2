"use strict"
import Controller from './controller.js'
import View from './view.js'
const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
   })
   // write your code here
class Flashcards {
   constructor() {}

   init() {
      let deck = process.argv[2]
      Flashcards.rlo = rl
      View.print_help()
      if (deck) {
         console.log("anda pilih deck sendiri")
         Controller.set_file(fs, deck)
         Controller.play(rl)
      } else {
         this.default()
      }
   }

   default () {
      rl.question('mau main dengan deck default ?', (ans) => {
         if (ans === "y") {
            console.log('ok kita main ')
            Controller.set_file(fs, "social.json")
            Controller.play(rl)
         } else {
            rl.close()
         }
      })

   }
}
let fcard = new Flashcards()
fcard.init()
