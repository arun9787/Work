let myArray1 = [1, 2, 3, 4];
returnValue1=[];
 myArray1.forEach((element) =>
 {
       returnValue1.push(element * element);
    })
    console.log(returnValue1);
  
    /* map method */
let myArray2 = [1, 2, 3, 4];
const returnValue2 = myArray2.map((element) => 
{
        return element * element;
    }
)
    console.log(returnValue2);