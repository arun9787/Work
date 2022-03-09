"use strict"
let array = [
    { id : 1 , name: 'edison' },
    { id : 2 , name: 'anand' },
    { id : 3 , name: 'vasanth'},
 ];
let a = array.reduce((key, value) => {
   key[value.id] = key[value.id] + 1 || 1;
   console.log(key);
   return key;
},{});
console.log(a);                         


//reduce() method executes a reducer function for array element, The reduce() method returns a single value.
//reduce() method executes a user-supplied "reducer" callback function on each element of the array. 