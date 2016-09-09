"use strict"
// write your code here
let prompt = require('prompt')
import quiz from "./model.js"
import View from "./view.js"
let i = 0

let tebakanSalah = 0
let tebakanBenar = 0

//Make Question Class
class Generic {
  static promptAnswer(){
    prompt.get('answer',function(err, result){
      if (result.answer.toLowerCase() == quiz[i].term.toLowerCase()){
        View.jawabanBenar()
        i++
        tebakanBenar++
        View.statusAnda(tebakanSalah, tebakanBenar)
        Generic.checkIndexRun(quiz.length)
      } else {
        View.jawabanSalah()
        tebakanSalah++
        View.statusAnda(tebakanSalah, tebakanBenar)
        if(tebakanSalah<5){
          Generic.checkIndexRun(quiz.length)
        } else {
          View.kesempatanHabis()
        }
      }
    })
  }

  static checkIndexRun(questionQty){
    if (i < questionQty){
      View.pertanyaan(quiz[i].definition)
      Generic.promptAnswer()
    } else {
      View.selesai()
    }
  }
}

View.welcome()
Generic.checkIndexRun(quiz.length)

//
