"use strict"
// write your code here
import Model from './model.js'


class View {
  static print_pertanyaan(rl,myCard,value,nyawa){
    if(value == myCard.length){
      console.log("SELESAI! LOE MENANG!!")
      return rl.close();
    }

    rl.question(`${myCard[value].definition} `, (answer) => {
      if(answer.toUpperCase() == myCard[value].term.toUpperCase()){
        console.log("Jago ya loe!")
        value++
        this.print_pertanyaan(rl,myCard,value,nyawa)
      }

      else if(answer.toUpperCase() != myCard[value].term.toUpperCase()){
        nyawa--
        if(nyawa == 0){
          console.log("WKWK! CUPU!!")
          return rl.close();
        }
        console.log("Salah woi! Nyawa loe sisa: " + nyawa + ". Tekan 0 untuk skip ke pertanyaan berikutnya!")
        this.print_pertanyaan(rl,myCard,value,nyawa)
      }
    });
  }

}



export default View
