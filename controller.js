import View from './view.js'
import Model from './model.js'


class Controller {

  static print_pertanyaan(rl, fs){
    let pilihKartu = process.argv[2]    
    let myCard = Model.masukin(fs,pilihKartu);
    View.print_pertanyaan(rl, myCard,0,3)

  }

}

export default Controller
