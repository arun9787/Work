"use strict"
function reverseWords(str) {
    let reverseWordArr = str.split(" ").reverse().join(" ");
    return reverseWordArr;
  }
console.log(reverseWords("Arun Kumar"));
