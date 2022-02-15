
let n1 = 5; 
let string1 = "";
for (let i = 1; i <= n1; i++) 
{
  for (let j = 1; j <= i; j++) {
    string1 += '*' + " ";
  }
  string1 += "\n";
  
}
console.log(string1);