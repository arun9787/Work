"use strict"
let n3= 5;
let string3 = "";
for (let i = 1; i <= n3; i++) 
{
  for (let j = n3; j > i; j--) {
    string3+= " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    string3+= "*";
  }
  string3+= "\n";
}
for (let i = 1; i <= n3- 1; i++) 
{
  for (let j = 0; j < i; j++) {
    string3+= " ";
  }
  for (let k = (n3 - i) * 2 - 1; k > 0; k--) {
    string3+= "*";
  }
  string3+= "\n";
}
console.log(string3);