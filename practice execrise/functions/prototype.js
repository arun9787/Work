function Person2(){
    this.name = 'john',
    this.age = 23
}
const person1 = new Person2();
console.log(Person2.prototype);



// methods to constructor function using prototype


function Person3(){
    this.name = 'john',
    this.age = 28
}

const person3 = new Person3();
const person4 = new Person3();

Person3.prototype.greet = function(){
    console.log('Hello' + ' ' + this.name) ;
}

person3.greet();
person4.greet();



