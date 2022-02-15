function reverseString(str) 
{
    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}
const result = reverseString("Arun Kumar");
console.log(result);
