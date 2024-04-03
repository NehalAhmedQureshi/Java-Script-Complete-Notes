
// ******************** DATE **********************

let date = new Date() ;

// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toTimeString());
// console.log(date.toUTCString());
// console.log(date.getTimezoneOffset());
//------------------------X-----------------

// let myCreatedDate = new Date(2024,3,4,1,0,30);// year,month(start from 0),date , hours,minutes,sec
// const myCreatedDate = new Date("2024-01-23") // year month date
const myCreatedDate = new Date("04-04-2024") // month date year 
// console.log(myCreatedDate.toString());

const newStamp = Date.now()

// console.log(newStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());
// console.log(Date.now()/1000); // milli second change in second
// console.log(Math.floor(Date.now()/1000));

const newDate = new Date()

// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(newDate);