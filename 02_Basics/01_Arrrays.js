let newArray = [0,1,2,3,4,5];

// console.log(newArray);

let myFriends = ["Waqas","Kashan","Abdullah"];
// console.log(myFriends);

// let myArray2 = new Array('nehal','abdullah','zahid')  // second type to declare an array
// console.log(myArray2);

// newArray.push(6) // to add a number in array 
// newArray.pop() // to remove an element in array
// newArray.shift() // to remove an element at the start of the array !
// newArray.unshift(0) // to add an element at the start of the arrray !

// console.log(newArray.includes(4)); // to search an element by name in an array
// console.log(newArray.indexOf(3)); 

const myArray = newArray.join(); // this function change an array into a string 
// console.log(myArray);

// console.log(newArray);

// ************** SLICE - SPLICE ****************

const nehalArray = newArray.slice(0,3); // this make a copy of array and give a slice of start index to end index last index is not includes
// console.log(nehalArray);

const nehalSplice = newArray.splice(0,3) // this changes in original array and indcludes the last index
// console.log(nehalSplice);
// console.log(newArray);