console.log(test);
var test;


a = 5;
console.log(a);
var a = 5;


var a;
a = 5;
console.log(a);


console.log(a);
var a = 5;



var a = 4;
function greet(){
    b = 'hello';
    console.log(b);
    var b;
}
greet();
console.log(b);


//function hoisting 

greet();
function greet(){
    console.log('Hi, there');
}


//function expression 

greet();
let greet = function(){
    console.log('Hi, there');
}



