"use strict"
let myArray1 = [1, 2, 3, 4];
const returnValue1  = myArray1.forEach((element) =>
    {
       return  element * element ;
    }
    )                                                                  //forEach() method returns “undefined“, executes the callbackFn function once for each array element;
    console.log(returnValue1);
    
/* map method */
let myArray2 = [1, 2, 3, 4];
const returnValue2 = myArray2.map((element) => 
{
        return element * element;                                       //The map() method returns the newly created array according to the provided callback function.
    }
)
    console.log(returnValue2);
