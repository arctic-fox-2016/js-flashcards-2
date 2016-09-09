"use strict"
// write your code here

class Model{
  constructor(fs, file = null){
    this._fs = fs;
    this._filename = file || "data.json";
    this._data = this.readFile();
  }
  set data(value) { this._data.push(value); }
  get data() { return this._data; }
  /*
  writeFile(data){
    fs.writeFile('social.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log(data);
    });
  }
  */
  readFile(){
    return JSON.parse(this._fs.readFileSync(this._filename, "utf8"))
  }
  getQuestion(index){
    return this.data[index].definition;
  }
  getAnswer(index){
    return this.data[index].term;
  }
}

export default Model;
