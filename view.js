"use strict"
// write your code here
class View {
  static print_help() {
    console.log(`==============> Welcome to Sahbana Flashcard <==============`);
    console.log(`Type 'node flashcard.js social' for social-type flashcard `);
    console.log(`Type 'node flashcard.js science' for science-type flashcard`);
  }

  static print_final_score(final_score) {
    console.log(`Final Score     : ${final_score}`);
    console.log(`Thank you for playing !`);
  }

  static print_current_score(current_score, answer_true, answer_wrong) {
    console.log(`Current Score   : ${current_score}`);
    console.log(`Answer true     : ${answer_true}`);
    console.log(`Answer wrong    : ${answer_wrong}`);

  }
}
