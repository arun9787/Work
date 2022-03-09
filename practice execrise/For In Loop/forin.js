const student = {
    name : 'monica',
    class : 4,
    age : 12
}

for(let key in student){
    console.log(`${key}=>${student[key]}`);
}


const salaries = {
    jack : 20000,
    paul : 30999,
    monica : 80000
}

for(let i in salaries){
    let salary = "$" + salaries[i];
    console.log(`${i} : ${salary}`);
}