// const student = {
//     firstName : 'Monica',
//     set changeName(newName){
//         this.firstName = newName;
//     }
// };

// console.log(student.firstName);
// student.changeName = 'sarah';

// console.log(student.firstName);


// object define


const student = {
    firstName : 'Monica'
}

Object.defineProperty(student, "getName" , {
        get : function(){
            return this.firstName;
        }
});

Object.defineProperty(student, "changeName",{
    set : function(value){
        this.firstName = value;
    }
});

console.log(student.firstName);

student.changeName = 'sarah';
console.log(student.firstName);