const obj1 = {
    id : 1, name: "edison"
};
const obj2 = {
     id: 1, name: "edison"
};
const obj3 = {
    id : 1 , name : "edison"
};
const obj4 = {
    id : 2 , name : "edison"
};
function ObjCompare(obj1, obj2 ){
    return obj1.id === obj2.id && obj1.name === obj2.name;
}
console.log(ObjCompare(obj1, obj2));
console.log(ObjCompare(obj3 , obj4));
