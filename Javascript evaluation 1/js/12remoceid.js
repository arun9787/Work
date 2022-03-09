"use strict"
const arr = [
    {id: 1, name: 'Stephen covey' }, 
    {id: 2, name: 'Robin Sharma' }, 
    {id: 3, name:'Tolstoy'}, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 5, name: 'James clear'}];
  
  const uniqueIds = new Set();                //new - create an instance of an object that has a constructor function.
  
  const unique = arr.filter(element => {
    const isDuplicate1 = uniqueIds.has(element.id);
    uniqueIds.add(element.id);
    console.log(uniqueIds);
    console.log(isDuplicate1);
    const isDuplicate2 = uniqueIds.has(element.name);
    uniqueIds.add(element.name);
    console.log(isDuplicate2);
 
      return !isDuplicate1&&!isDuplicate2;
  });
  console.log(unique);
  

