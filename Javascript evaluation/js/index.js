//1.
const number = 5;
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) 
{
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}

//2.
var a = 10;
console.log(a == '10');
console.log(a === '10');

//3.
function ReverseString(str) 
{
	if(!str || str.length < 2 || typeof str!== 'string') {
	return 'Not valid';
    }
	const revArray = [];
	const length = str.length - 1;
	for(let i = length; i >= 0; i--) {
		revArray.push(str[i]);
	}
	return revArray.join('');
}

console.log(ReverseString("Yavar Techworks"))

//4.
function reverseWords(str) {
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
  }
console.log(reverseWords("Yavar TechWorks"))

//5.
function check_palindrome( str )
  {
    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ;
      let y = str[j-i];
      if( x != y)
      {
        return false;
      }
    }
    return true;  
  }
 
  function is_palindrome( str )
  {

    let ans = check_palindrome(str);
    if( ans == true )
    {
      console.log("passed string is palindrome ");
    }
    else
    {
      console.log("passed string not a palindrome");
    }
  }
  let test = "Yavar";
  is_palindrome(test);

  //6.
    /* ForEach */
    let myArray1 = [1, 2, 3, 4];
    const returnValue1 = myArray1.forEach((element) => {
        return element * element;
    })
    console.log(returnValue1);
  
    /* map method */
    let myArray2 = [1, 2, 3, 4];
    const returnValue2 = myArray2.map((element) => {
        return element * element;
    })
    console.log(returnValue2);
//7.

const min = 1;
const max = 5;
const b = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random value between ${min} and ${max} is ${b}`);

//8. 
function removeDuplicates(arr)
{
    let set = new Set();
    for(let i = 0; i < arr.length; i++)
        set.add(arr[i]); 
    console.log("[" + Array.from(set).join(", ") + "]");
}
let arr = [1,2,9,4,5,8,3,5,1,4,5];
removeDuplicates(arr);

//9.
const number1 = 10;
let sum = 0;
for (let i = 1; i <= number1; i++) {
    sum += i;
}
console.log('The sum of natural numbers:', sum);

//10.
function EvenOddSum(arr)
{
    var even = 0;
    var odd = 0;
    for (let i = 0; i <= arr; i++)
    {
     
        if (i % 2 == 0)
            even += i;
        else
            odd += i;
    }
    console.log("Even " + even);
    console.log("Odd " + odd);
}
EvenOddSum(100);

//11.
function getUniqueAfterMerge(arr1, arr2)
{

    let ar = arr1.concat(arr2);
    console.log(ar);
}

const array1 = [1,2,9,3,5,1,4,5];
const array2 = [11,54,70,40];
getUniqueAfterMerge(array1, array2);

//12.
function removeDuplicates() 
{
      
    books = [
        {id: 1, name: 'Stephen covey' }, 
        {id: 2, name: 'Robin Sharma' }, 
        {id: 3, name:'Tolstoy'}, 
        {id: 3, name: 'Tolstoy'}, 
        {id: 5, name: 'James clear'}];
      
    console.log(books);
    let newArray = [];
    let uniqueObject = {};
    for (let i in books) 
    {

        objid = books[i]['id'];
        uniqueObject[objid] = books[i];
    }

    for (i in uniqueObject) {
        newArray.push(uniqueObject[i]);
    }

    console.log(newArray);
}
removeDuplicates();

//13a.
const obj1 = {
    id : 1, name: "edison"
};
const obj2 = {
     id: 1, name: "edison"
};
const haveSameData = function(obj1, obj2) {
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;
    if(obj1Length === obj2Length) {
        return Object.keys(obj1).every(
            key => obj2.hasOwnProperty(key)
               && obj2[key] === obj1[key]);
    }
    return false;
}
console.log(haveSameData(obj1, obj2));

//13b.
const obj3 = {
    id : 1, name: "edison"
};
const obj4 = {
     id: 2, name: "edison"
};
const haveSameData1 = function(obj3, obj4) {
    const obj3Length = Object.keys(obj3).length;
    const obj4Length = Object.keys(obj4).length;
    if(obj3Length === obj4Length) {
        return Object.keys(obj3).every(
            key => obj4.hasOwnProperty(key)
               && obj4[key] === obj3[key]);
    }
    return false;
}
console.log(haveSameData(obj3, obj4));

//14.
 let x = [
    [1,4,2,3],
    [10,20,20],
    [100,500,700,600], 
    [2000,1000]
    ];

const numbers = [1, 4, 2, 3 ,[10, 20, 30],[100,500,700,600],[2000,1000]];
const flatNumbers = numbers.flat();
console.log(flatNumbers);

//15.
const people = [
    { id : 1 , name: 'edison' },
    { id : 2 , name: 'anand' },
    { id : 3 , name: 'vasanth'}
 ];
 function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
       const key = obj[property];
       if (!acc[key]) {
          acc[key] = [];
       }
       // Add object to list for given key's value
       acc[key].push(obj);
       return acc;
    }, {});
 }
 const groupedPeople = groupBy(people, 'name');
 console.log(groupedPeople);


//16.
let n1 = 5; // height of pattern
let string1 = "";
// External loop
for (let i = 1; i <= n1; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string1 += '*';
  }
  string1 += "\n";
  
}
console.log(string1);

//17. 
let n = 4, m= 1; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += m;
    m++;
  }
  string += "\n";
}
console.log(string);

//18. 
let n2 = 4  , c =1;
let string2 = "";
// External loop
for (let i = 1; i <= n2; i++) {
  // creating spaces
  for (let j = 1; j <= n2 - i; j++) {
    string2 += " ";
  }
  // creating numbers
  for (let k = 1; k <= i; k++) {
    string2 += c;
    string2 += " ";
    c++;
  }
  string2 += "\n";
}
console.log(string2);

//19.
let n3= 5;
let string3 = "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n3; j > i; j--) {
    string3+= " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string3+= "*";
  }
  string3+= "\n";
}
// downside pyramid
for (let i = 1; i <= n3- 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string3+= " ";
  }
  // printing star
  for (let k = (n3 - i) * 2 - 1; k > 0; k--) {
    string3+= "*";
  }
  string3+= "\n";
}
console.log(string3);