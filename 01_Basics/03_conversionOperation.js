let score = null;

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// 33 => 33
// true => 1
// false => 0
// null => 0
// undefined => NaN

let valueInstring = String(33);
console.log(typeof valueInstring);

let valueInBoolean = Boolean("Nehal");
console.log(typeof valueInBoolean);
console.log(valueInBoolean);

// Boolean(0) => false
// Boolean("") => false
// Boolean(null) => false
// Boolean(undefined) => false

console.table([typeof score , typeof valueInNumber , typeof valueInstring , typeof valueInBoolean ]) ;

console.table ([score , valueInBoolean , valueInNumber , valueInstring]) ; 