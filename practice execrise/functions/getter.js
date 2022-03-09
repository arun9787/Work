// getter 

const student = {
    firstName : 'Monica',
    get getName(){
        return this.firstName;
    }
};

console.log(student.firstName);
console.log(student.getName);
console.log(student.getName());;