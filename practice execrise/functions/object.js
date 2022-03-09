const student = {
    name :'arun',
    class : 10
};
console.log(typeof student);
console.log(student.name);
console.log(student['name']);


const person = {
    name : 'sam',
    age : 20,
    greet : function(){
        console.log('hello')
    }
}
person.greet();