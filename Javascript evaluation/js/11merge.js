function getUniqueAfterMerge(arr1, arr2)
{

    // let ar = arr1.concat(arr2);
    // console.log(ar);
    let newarr = [...arr1, ...arr2];
    console.log(newarr);
}

const array1 = [1,2,9,3,5,1,4,5];
const array2 = [11,54,70,40];
getUniqueAfterMerge(array1, array2);