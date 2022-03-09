const person = {
    name : 'john',
    greet : function (){
        console.log('hello');
    }
}
console.log(person.name);
person.greet();


let number = '23.32';
let result = parseInt(number);
console.log(result);

// parseInt means convert numeric string to value as integer.



let student = {};
student.name = 'john';
student.greet= function(){
    console.log('hello');
}
student.greet();


// this keyword

const person1 = {
    name : 'john',
    age : 30,
    greet : function (){
        console.log('The name is ' + ' ' + this.name);
    }
};
person1.greet();