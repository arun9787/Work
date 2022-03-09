function Person(){
    this.name = 'john',
    this.age = 23
    this.greet = function(){
        console.log('hello');
    }
}
const person1 = new Person();
const person2 = new Person();

console.log(person1.name);
console.log(person2.name);


function Person1(person_name, person_age, person_gender){
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,
    this.greet = function(){
        return ('Hi' + ' '  + this.name);
    }
}

const person3 = new Person1('john',23,'male');
const person4 = new Person1('sam',28,'male');

console.log(person3.name);
console.log(person4.name);



// object literal 
let person = {
    name : 'sam'
}



// constructor fucntion


function Person2(){
    this.name = 'sam'
}
let person5 = new Person2();
let person6 = new Person2();


