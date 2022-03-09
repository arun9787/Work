"use strict"
function reverseString(str)
{
    const arrayStrings = str.split(" ");
    console.log(arrayStrings);
    let arrayStrings1 = str.split("");
    let reverseString1 = arrayStrings1.reverse();
    let joinArray1 = reverseString1.join(" ");
    const reverseArray = arrayStrings.reverse();
    console.log(reverseArray);
    const joinArray = reverseArray.join(" ");
    console.log(joinArray1);
    return joinArray;
    
}
console.log(reverseString("Arun Kumar"));


