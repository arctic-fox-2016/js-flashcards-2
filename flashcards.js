"use strict"

// write your code here
import Controller from './controller.js'

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Main quiz yuuuuuuu!")
Controller.print_pertanyaan(rl, fs);
