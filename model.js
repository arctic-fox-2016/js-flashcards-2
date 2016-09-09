
"use strict"
// write your code here
let input = 0
class Model {
  static promptjawaban(){
    prompt.get('jawaban',function(err, result){
      if (result.jawaban.toLowerCase() == data[input].term.toLowerCase()){
        console.log("Anda benar, ayo lanjut ke pertanyaan berikutnya")
        input++
        Model.queue(data.length)
      } else {
        console.log("Anda salah, di coba lagi ya")
        Model.queue(data.length)
      }
    })
  }


  static queue(index){
    if (input < index){
      console.log("------------------------------------------------------------------")
      console.log(data[input].definition)
      Model.promptjawaban()
    } else {
      console.log("flashcard sudah selesai")
    }
  }
}

export default Model
