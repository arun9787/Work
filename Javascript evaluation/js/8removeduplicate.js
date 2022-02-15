function removeDuplicates(arr)
{
    let set = new Set();
    for(let i = 0; i < arr.length; i++)
        set.add(arr[i]); 
    console.log("[" + Array.from(set).join(", ") + "]");
}
let arr = [1,2,9,4,5,8,3,5,1,4,5];
removeDuplicates(arr);
