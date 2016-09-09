"use strict"
// write your code here

import view from "./view"

let fs = require('fs')
var prompt = require('prompt');
let file = 'social.json'
var soal = []
var jawaban = []
var kesempatan = 0
class model{
    static ambilSoal(args){
      var content = fs.readFileSync(args);
      var jsonContent = JSON.parse(content);
      for(let idx in jsonContent){
        soal.push(jsonContent[idx].definition)
      }
      return soal
    }
    static ambilJawaban(args){
      var content = fs.readFileSync(args);
      var jsonContent = JSON.parse(content);
      for(let idx in jsonContent){
        jawaban.push(jsonContent[idx].term)
      }
      return jawaban
    }
    static cetakSoal(soal,jawaban,idx){
      if(kesempatan==3){
        view.displayKalah()
      }
      else{
        if(idx<soal.length)console.log(soal[idx])
        if(model.cekIndex(idx,soal))
        {
          prompt.get('jawaban', function (err, result) {
            if(result.jawaban.toLowerCase() == jawaban[idx].toLowerCase()){
              console.log('BENAR\n')
              idx++
              model.cetakSoal(soal,jawaban,idx)
            }
            else {
              console.log("SALAH\n");
              kesempatan++
              model.cetakSoal(soal,jawaban,idx)
            }
          })
        }
        else {
          view.displayMenang()
        }
      }
    }
    static cekIndex(idx,soal){
      if(idx!=soal.length)return true
      else return false
    }
}
export default model
