let sum = 0 , number ;
while(true){
    number = parseInt(prompt('Enter a number : '));
    if(number < 0){
        break;
    }
    sum += number;
}

console.log(`The sum is ${sum}.`);