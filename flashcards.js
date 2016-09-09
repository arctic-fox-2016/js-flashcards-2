"use strict"
//import Model from './model'
import view from "./view"
import model from "./model"
import controller from "./controller"

var args = process.argv.slice(2).toString();
if(args!=""){
  controller.persiapan(args)
  controller.main(args)
}
else{
  console.log("sintax anda kurang, masukkan nama json anda");
  console.log("contoh : flashcards.js social.json");
}
