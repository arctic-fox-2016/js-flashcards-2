"use strict"

class Model {
  static masukin(fs,pilihKartu){
    let myCard = []

    if(pilihKartu != "social.json" || pilihKartu != "social2.json"){
      console.log("Sorry Format Anda Tidak Benar! Soal kembali ke default.\n");
      var listCardJSON = JSON.parse(fs.readFileSync("social.json"))
    }
    else{
      var listCardJSON = JSON.parse(fs.readFileSync(pilihKartu))
    }

    for (let i =0;i<listCardJSON.length;i++){
      myCard.push({
        definition:listCardJSON[i].definition,
        term:listCardJSON[i].term
      })
    }
    return myCard;
  }
}

export default Model
