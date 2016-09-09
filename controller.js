"use strict"
// write your code here
import model from "./model"
import view from "./view"
let soal=[]
let jawaban =[]
let idx=0
class controller{
  constructor(){
    this.view = view
    this.model = model
  }
  static persiapan(args){
      soal = model.ambilSoal(args)
      jawaban = model.ambilJawaban(args)
  }
  static main(args){
    view.opening(args)
    model.cetakSoal(soal,jawaban,idx)
  }
}

export default controller
