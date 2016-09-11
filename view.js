"use strict"
// write your code here
class View {
  static correct(index){
    console.log("correct!\n")
  }

  static wrong(index){
    console.log("Incorrect! Try again.\n");
  }
  static title(){
    console.log("Welcome to JS Flash Cards. To Play, just enter the correct term for each definition. Ready? Go! \n")
  }
}
export default View
