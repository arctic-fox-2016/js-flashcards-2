"use strict"
import Controller from './controller.js'

let prompt = require('prompt')
let fs = require('fs')
let data = JSON.parse(fs.readFileSync('data.json'))
let input = 0

//soal soal dari data.json
Controller.queue(data.length)
