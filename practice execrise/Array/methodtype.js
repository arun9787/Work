let dailyActivities = ['eat','sleep','workout'];
let newRoutine = ['workout'];
dailyActivities.sort();

const position = dailyActivities.indexOf('workout');
const newDailyActivities = dailyActivities.slice(1);
const routine = dailyActivities.concat(newRoutine);

console.log(dailyActivities);
console.log(position);
console.log(newDailyActivities);
console.log(routine);
