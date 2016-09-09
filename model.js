"use strict"
// write your code here
let fs =require('fs')

let ambilFile = function(){
    if(process.argv[2]!=""){
      return JSON.parse(fs.readFileSync("data.json",'utf8'))
    } else {
      return JSON.parse(fs.readFileSync(process.argv[2],'utf8'))
    }
}

let quiz = ambilFile()

export default quiz
