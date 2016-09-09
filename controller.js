"use strict"
import View from './view.js'
// write your code here
class Controller {

   static set_file(fs, deck) {
      Controller.soal = JSON.parse(fs.readFileSync(deck))
      Controller.score = 100
      Controller.answer_true = 0
      Controller.answer_wrong = 0

   }

   static play(rl) {
      Controller.get_answer(rl, Controller.soal, 0)
   }

   static get_answer(rl, question, idx) {
      if (idx < question.length) {
         rl.question(question[idx].definition + " :", (user_ans) => {
            if (question[idx].term.toLowerCase() == user_ans.toLowerCase()) {
               console.log("thats it!!")
               Controller.answer_true++
                  View.print_current_score(Controller.score, Controller.answer_true, Controller.answer_wrong)
               Controller.get_answer(rl, question, idx + 1)
            } else {
               console.log("It's not that hard man!!");
               Controller.answer_wrong++
                  Controller.score -= 10
               Controller.get_answer(rl, question, idx)
            }
         })
      } else {
         View.print_final_score(Controller.score)
         rl.close()
      }
   }
}
export default Controller
