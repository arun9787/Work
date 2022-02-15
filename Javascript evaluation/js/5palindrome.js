function palindrome(string)
{
  let reverse = ""; 
  let j = 0; 
  length = string.length; 
  for(i = length; i> 0; i--)
  {
   reverse += string[i - 1];
  }
  console.log(reverse);
  if(string === reverse)
  {
    console.log("The string is a Palindrome")
  }
  else{
    console.log("The string is not a palindrome");
  }
}

palindrome("racecar"); 


