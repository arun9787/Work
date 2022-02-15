
let array = [
    { id : 1 , name: 'edison' },
    { id : 2 , name: 'anand' },
    { id : 3 , name: 'vasanth'}
 ];
let a = array.reduce((key, value) => {
   key[value.id] = key[value.id] + 1 || 1;
   return key;
}, {});
console.log(a);