"use strict"
// write your code here
let fs =require('fs')
let namaFile = process.argv[2] || "data.json"

let ambilFile = function(){
  return JSON.parse(fs.readFileSync("quizzes/"+namaFile,'utf8'))
}

let quiz = ambilFile()

export default quiz
