//Untuk membuat teka-teki sendiri, isinya 5 pertanyaan dan jawaban yang bisa dipakai untuk main flashcard
//untuk membuat gunakan ini: babel-node create-quiz-file.js [namafilekamu:harus ext json]

let prompt = require('prompt')
let fs = require('fs')
let array = []
let i = 1
let fileName = process.argv[2] || "contoh-quizku.json"

class Questions {
  constructor(definition, term){
    this.definition = definition
    this.term = term
  }
}

class Generic {
  static createQuestion(){
    console.log(`Pertanyaan ke-${i}`)
    if(i <= 5){
      Generic.askQuestion()
    } else {
      console.log(`Pertanyaan akan dicetak ke ${fileName}, di folder quizzes`)
      Generic.writeFile(fileName)
    }
  }

  static askQuestion(){
    prompt.get(['definition','term'],function(err,result){
      array.push(new Questions (result.definition, result.term))
      i++
      Generic.createQuestion()
    })
  }

  static writeFile(input){
    fs.writeFile("quizzes/"+input ,JSON.stringify(array),function(err,data){})
  }
}

Generic.createQuestion()
