"use strict";
function palindrome(string)
{
  let reverse = ""; 
  let i , j = 0; 
  let length = string.length;
  i=length;                         // length = 7
  while(i>0)                           
  {
   reverse += string[i - 1];
   i--;                       
  }
  if(string === reverse)
  {
    console.log(string + " is a Palindrome")
  }
  else{
    console.log(string + " is not a palindrome");
  }
}
palindrome("dance"); 





// for ( i =7 ; 7>0 )    condition is true , again decremenet the value.  print r
//for ( i=6 ; 6>0)        condition is true ,  ""       . print a
//for (i=5 ; 5>0)         " "            ,    " "       . print c
//for (i=4 ; 4>0)          ""             , "  "         . print e
// for ( i =3 ; 3>0 )    condition is true , ""          . print c
// for ( i =2 ; 2>0 )    condition is true , "  "        . print a
// for ( i =1 ; 1>0 )    condition is true , ""          . print r