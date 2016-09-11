"use strict"
// write your code here
import View from './view.js'
class Controller {

  static questions(fs){
     Controller.ques = JSON.parse(fs.readFileSync("social.json"))
  }

  static playGame(rl){
      Controller.flash(rl, Controller.ques,0)
  }

static flash(rl, flashcard,index){
  if(index < flashcard.length){
  rl.question(flashcard[index].definition,(guess)=>{
    if(flashcard[index].term.toLowerCase() == guess.toLowerCase()) {
      View.correct(index)
      Controller.flash(rl, flashcard,index+1)
      } else{
      View.wrong(index)
      Controller.flash(rl, flashcard,index)
    }
  })
  } else{
    rl.close()
  }
}
}
export default Controller
