//global scope

let a = 'hello';
function greet(){
    console.log(a);
}
greet();



//local scope 


let a1 = 'hello';
function greet(){
    let b = 'World';
    console.log(a+b);
}

greet();
console.log(a+b);
