// let x = function(x,y){
//     return x * y;
// }


// //one argument

// let greet = x => console.log(x);
// greet('hello');


// // expression

// let age = 5;
// let welcome =(age<18)?
// () => console.log('Baby'):
// () => console.log('Audlt');

// welcome();


// let sum = (a,b) => {
//     let result = a + b;
//     return result;
// }
// let result1 = sum(5,8);
// console.log(result1);



function Person(){
    this.name = 'jack',
    this.age= 25,
    this.sayName = function(){
        console.log(this.age);
        function innerFunc(){
            console.log(this.age);
            console.log(this);
        }
        innerFunc();
    }
}
let x1 = new Person();
x1.sayName();






