"use strict"
// write your code here
class Generic {
  static statusAnda(tebakanSalah, tebakanBenar){
    console.log(`Tebakan Benar Anda: ${tebakanBenar}, Tebakan Salah Anda: ${tebakanSalah}`)
  }
  static jawabanBenar(){
    console.log("Jawaban anda Benar!")
  }

  static jawabanSalah(){
    console.log("Jawaban anda Salah! Coba Lagi!")
  }

  static pertanyaan(question){
    console.log(question)
  }

  static selesai(){
    console.log("Quiz sudah selesai! Anda Pintar Sekali")
  }

  static kesempatanHabis(){
    console.log("Maaf... Kami menghentikan quiz anda karena sudah mejawab 5 kali salah")
  }

  static welcome(){
    console.log("Mari mengerjakan quiz, anda memilih quiz dari file: ", "data.json"||process.argv[2])
  }
}

export default Generic
