const weakSet = new WeakSet();
console.log(weakSet);

let obj = {
    message : 'hi',
    sendMessage : true
}

weakSet.add(obj);

console.log(weakSet);

