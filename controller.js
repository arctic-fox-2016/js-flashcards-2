"use strict"
// write your code here

import Model from "./model.js";
import View from "./view.js";

const fs = require('fs');
const readline = require('readline');

class Controller{
  constructor(property = {}){
    this.questionIndex = 0;
    this.tryCounter = 1;
    this.tryMaxCounter = 3;
    this.model = new Model(fs, (process.argv[2]) ? process.argv[2] : null);
    this.view = new View();
  }
  startGame(){
    this.view.printHeadline();
    this.processQuestion();
  }
  setQuestion(){
    return `\nQuestion #${this.questionIndex+1} : ${this.model.getQuestion(this.questionIndex)}\nAnswer      : `;
  }
  processQuestion(){
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: this.setQuestion()
    });

    rl.prompt();
    rl.on("line", (line) => {
      if(line.trim().toLowerCase() == "exit") rl.close();

      let answer = this.checkAnswer(line.trim());
      this.view.printText((answer) ? "Correct, Bro!" : `Wrong! ${this.tryCounter} of ${this.tryMaxCounter} try attempt`);

      if(answer || this.tryCounter >= this.tryMaxCounter){
        if(this.questionIndex >= this.model.data.length-1) rl.close();
        else this.questionIndex += 1;
        this.tryCounter = 1;
        rl.setPrompt(this.setQuestion());
        rl.prompt();
      } else {
        this.tryCounter += 1;
        rl.prompt();
      }
    }).on("close", () => {
      this.view.printText('\n\n\n ============== \nHave a great day!\n\n');
      process.exit(0);
    });
  }
  checkAnswer(answer = null){
    if(answer.toLowerCase() == this.model.getAnswer(this.questionIndex).toLowerCase()){
      return true;
    }
    return false;
  }
}

export default Controller;
