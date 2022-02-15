var num, i, chk=0;
num = 4;
for(i=2; i<num; i++)
{
  if(num%2==0)
  {
    chk++;
    break;
  }
}
if(chk==0)                                                                 // a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).
  console.log(num + " is a Prime Number");
else
  console.log(num + " is not a Prime Number");