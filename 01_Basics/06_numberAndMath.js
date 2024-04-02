const score = 400 ;
// console.log(score);

// ------------- this function store value in number with special protocol ---------------
const balance = new Number(500);
// console.log(balance);

// ------------ this function changes a number in a string -------------
// console.log(balance.toString());
// console.log(balance.toString().length);

// ----------- this function increase value after point ------------
// console.log(balance.toFixed(2));

// ----------- this function use to roundoff a number in given digit number --------------
const roundOff = 45.66;

// console.log(roundOff.toPrecision(5)); // 45.660
// console.log(roundOff.toPrecision(4)); // 45.66
// console.log(roundOff.toPrecision(3)); // 45.7

// ------------------- to place commas in number to increase readibility ------------------
const hundreds = 1200000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// *********************************  MATHS **************************

// console.log(Math);
// console.log(Math.abs(-4)); // change negative to positive number //=> 4
// console.log(Math.abs(4)); // no function 

// console.log(Math.round(4.34)); // to round off a number => 4
// console.log(Math.ceil(4.2)); // give the posibile large value
// console.log(Math.floor(4.2)); // give the posibile small value
// console.log(Math.min(2,3,4,5,6,6)); // return smallest value in the array
// console.log(Math.max(2,3,4,5,6,6)); // return largest value in the array

console.log(Math.random()); // return random math number which exist between 0 to 1

console.log((Math.random()*10) * 1); // return number between 0 to 10

console.log((Math.random()*10 +1) + 10); // return number between 10 to 20

