var a = 10;
console.log(a == '10');         // (==) is abstract equality comparison operator, which transforms the operands to the same type before making the comparison. 
console.log(a === '10');        // (===) are strict equality comparison operator, which returns false for different types and different content.
