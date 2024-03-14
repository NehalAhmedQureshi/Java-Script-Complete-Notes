const accountId = 990123 ;
let accountEmail = "example@domain.com" ;
var accountPassword = "1234" ; // this key word is not use yet
region = "Pakistan" ;

// accountId = another value // is not possible

console.log(accountId);
/*
prefer not to use var 
because of issue in block or functional scope
*/

console.table([accountId , accountEmail , accountPassword , region]);