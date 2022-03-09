"use strict"
const number = 267;
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) 
{                                                                  // A prime number is a positive integer that is only divisible by 1 and itself.
    for (let i = 2; i <number; i++) {
        if (number % i == 0) { 
            isPrime = false;
        }
    }
    if (isPrime) 
    {                                                                           //any valid set of literals, variables, operators, and expressions that evaluates to a single value.
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}







