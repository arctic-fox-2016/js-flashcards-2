"use strict"
// write your code here
class view{
    static displayMenang(){
      console.log(`===============================================`);
      console.log('======Anda bisa menjawab semua, SELAMAT!======');
      console.log(`===============================================`);
    }

    static displayKalah(){
      console.log(`===============================================`);
      console.log(`=============3x Salah, Anda Kalah !============`);
      console.log(`===============================================`);
    }

    static opening(args){
      console.log(`===============================================`);
      console.log(`== Selamat Datang di Permainan Flash Card 2 ==`);
      console.log(`== ANDA MENGGUNAKAN KARTU DARI DECK ${args} ==`);
      console.log(`===============================================`);
    }
}

export default view
