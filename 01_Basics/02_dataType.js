"use strict" ; // treat all js code as newer version

// code readability should must

let Name= "Nehal" ;
const number= 23 ;
let follow = true ;
let sum = BigInt(9999) ;
let sample ; 
let symbol = Symbol("©")
let Sample = null;


console.log(typeof Name) //string
console.log(typeof number) // number
console.log(typeof follow) // boolean
console.log(typeof sum) // bigInt
console.log(typeof sample) // undefined
console.log(typeof symbol) // special symbol
console.log(typeof Sample) // object or null 

console.table([typeof Name ,typeof  number ,typeof  follow ,typeof  sum ,typeof  sample ,typeof  sample , typeof Sample])