"use strict"
    function removeDuplicates(arr)
    {
        let set = new Set();
        console.log(set);
        let i;
        for( i = 0; i < arr.length; i++){
            set.add(arr[i]); 
            console.log(arr[i]);
            console.log(set);
        }
        console.log("[" + Array.from(set) + "]");
    }
    let arr = [1,2,9,4,5,8,3,5,1,4,5];
    removeDuplicates(arr);
