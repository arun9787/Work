let students = ['john','sara','jack'];
students.forEach(myfucntion);

function myfucntion(item,index,arr){
        arr[index] = 'hello ' + item;
}
console.log(students);


// arrow function

const students1 = ['john','sara','jack'];
students1.forEach(element =>{
    console.log(element);
});



// for loop

const arrayItems = ['item1','item2','item3'];
const copyItems = [];

for(let i = 0; i< arrayItems.length;i++){
    copyItems.push(arrayItems[i]);
}
console.log(copyItems);

// foreach

arrayItems.forEach(function(item){
    copyItems.push(item)
})
console.log(copyItems);


//for of with sets


const set = new Set([1,2,3]);
set.forEach(myFunction);
function myFunction(item){
    console.log(item);
}



// foreach with maos

let map = new Map();
map.set('name','jack');
map.set('age','27');
map.forEach(myFunction);
function myFunction(value,key){
    console.log(key + '-' + value);
}