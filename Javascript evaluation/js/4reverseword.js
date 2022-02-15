
function reverseWords(str) {
    let reverseWordArr = str.split(" ").reverse();
    return reverseWordArr.join(" ");
  }
console.log(reverseWords("Arun Kumar"))