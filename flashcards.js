"use strict"
import Controller from './controller.js'
import Model from './model.js'
let prompt = require('prompt')
let fs = require('fs')
let data = JSON.parse(fs.readFileSync('data.json','utf8'))


//soal soal dari data.json
Model.queue(data.length)
