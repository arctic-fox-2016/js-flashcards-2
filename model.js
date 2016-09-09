"use strict"

let fs = require("fs")

class Model {
  static load(filePath) {
    return JSON.parse(fs.readFileSync(filePath))
  }
}

export default Model
