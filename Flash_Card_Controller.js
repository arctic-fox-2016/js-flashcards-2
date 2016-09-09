"use strict"
// write your code here

class Flash_Card_Controller {
  constructor(component) {
    this.definition = component['definition']
    this.term = component['term']
  }

  print_pertanyaan(value,nyawa){
    if(value == myCard.length){
      console.log("SELESAI! MENANG KAMU!!")
      return rl.close();
    }
  if(answer == myCard[value].term){
        console.log("JAGO YA LOE!")
        value++
        print_pertanyaan(value,nyawa)
      }

      else if(answer != myCard[value].term){
        nyawa--
        if(nyawa == 0){
          console.log("WKWK! CUPU!")
          return rl.close();
        }
        console.log("SALAH WOE! NYAWA KAMU SISA " + nyawa)
        print_pertanyaan(value,nyawa)
      }
    });
  }
}





export default Flash_Card_Controller
