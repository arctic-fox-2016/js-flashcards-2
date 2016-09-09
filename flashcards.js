"use strict"

import Controller from "./controller"

let start = false
process.argv.forEach((val, index) => {
  if (index == 2) {
    Controller.start(val)
    start = true
  }
})

if (start == false) {
  console.log("\nPlease select a .json file with the definition/term data.")
  console.log("babel-node flashcards.js <JSON FILE>\n")
}
