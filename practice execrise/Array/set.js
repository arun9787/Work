const set1 = new Set([1,2,3]);
console.log(set1);

const set2 = new Set([1,'hello',{count : true}
]);
console.log(set2);

console.log(set1.values());

console.log(set1.has(1));


for(let i of set1){
    console.log(i);
}


