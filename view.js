"use strict"
// write your code here



class View{
  constructor(property = {}){

  }
  printNewLine(count = 0){
    for(let idx = 0; idx < count; idx++) console.log("\n")
  }
  printClearScreen(){
    console.log("\x1B[2J");
  }
  printHeadline(){
    this.printClearScreen();
    this.printText("$ node flashcards.js");
    this.printText("Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!");
    this.printNewLine(1);
    this.printText(`Type "exit" to exit the game!`)
    this.printNewLine(1);
  }
  printText(text){
    console.log(text);
  }
}

export default View;
