const name = "Nehal"
const repoCount = 20

// ----------------------------- OLD WAY TO CONGATINATE STRING ------------------------
// console.log(name + repoCount + " value ");

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ MODERN WAY TO CONGATENATE STRING ^^^^^^^^^^^^^^^^^^^^^^^^^^

// console.log(`Hello ${name} your repo count is ${repoCount}`);

const guestName = new String('Nehal');

// console.log(guestName);
// ------------------------------- to check prototype functions --------------------
console.log(guestName.__proto__);

/* +++++++++++++++++++++++++++++ an prototype function which makes a copy of selected variable and changes in this copy not actual variable ++++++++++++++++++++++++++++++++*/
console.log(guestName.toUpperCase());

// '''''''''''''''''''''''''' to check length of my variable ''''''''''''''''''''''''''''''
console.log(guestName.length);
// $$$$$$$$$$$$$$$$$$$$$$$$$ to find which character are placed on given index $$$$$$$$$$$$$$$$$$$
console.log(guestName.charAt(4));
// ~~~~~~~~~~~~~~~~~~~~~~~~~ to find which index this given string belongs ~~~~~~~~~~~~~~~~~~
console.log(guestName.indexOf('e'));

// -------------- this function make a substring of original string with + start or end number ---------
const substring = guestName.substring(0,3);
console.log(substring);

//------------ this function cut a slice of my string from given +/- start or end value --------------
const slice = guestName.slice(-4,3)
console.log(slice);

// ---------------------- trim function use to remove extra spaces ---------------------
const myName = "    Nehal       "
console.log(myName);
console.log(myName.trim());

const url = "https://mnehal.netlify.app"

// ----------------------- use to replce first calue to second value ---------------------
console.log(url.replace(".","%20"));

// ---------------------- use to find value in string ------------------------
console.log( url.includes('nehal'));

// ------------------------ use to make a array or break the value by given value --------------
console.log(url.split('.'));