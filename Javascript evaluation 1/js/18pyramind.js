"use strict"
let n2 = 4  , c =1;
let string2 = "";
for (let i = 1; i <= n2; i++) 
{
  for (let j = 1; j <= n2 - i; j++) {
    string2 += " ";
  }
  for (let k = 1; k <= i; k++) {
    string2 += c;
    string2 += " ";
    c++;
  }
  string2 += "\n";
}
console.log(string2);