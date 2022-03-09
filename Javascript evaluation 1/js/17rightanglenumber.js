"use stirct"
let n = 4, m= 1; 
let string = "";
for (let i = 1; i <= n; i++) 
{  
  for (let j = 1; j <= i; j++) {
    string += m + " ";
    m++;
  }
  string += "\n";
}
console.log(string);