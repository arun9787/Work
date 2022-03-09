function greet(){
    console.log('hello there');
}
greet();


// with parameters

function greet(name){
    console.log("hello" + name + ':)');
}
let name = prompt('enter a name');
greet(name);


// add two numbers

function add(a,b){
    console.log(a+b);
}

add(3,4);
add(2,9);