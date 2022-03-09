let x = [
    ['jack',24],
    ['sara',28],
    ['peter',24]
];

console.log(x[0]);
console.log(x[0][0]);



let studentsData = [['Jack',24],['sara',23]];
for(let i =0 ; i <studentsData.length;i++){
    let innerArrayLength = studentsData[i].length;
    for(let j=0;j<innerArrayLength;j++){
            console.log(studentsData[i][j] );
    }
}