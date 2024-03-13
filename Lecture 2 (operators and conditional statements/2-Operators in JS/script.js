//<h1>Arithmetics Operators</h1>

let a = 5;
let b = 3;

console.log("a = ", a , "& b = ", b);
console.log("a + b = " , a + b);
console.log("a - b = " , a - b);
console.log("a x b = " , a * b);
console.log("a ÷ b = " , a / b);
console.log("a % b = " , a % b);// y reminder wapis deta h "Modulus Operator"
console.log("a ** b = " , a ** b);// y power lagta h 5 ^ 2 = 25 "Exponential Operator"

//<h2>Unary Operator</h2>

/* unary operators wo operators hota hn jinko do values ki need ni hoti blk aik value s hi kam chala leta hn inki two types hn 1- increment , 2- decrement */

// a ++ k matlb h "a +1" aur a -- k mtlb h "a-1"
let c = 14 ;
let d = 16 ;

c ++ ; // c + 1 ; c = 15 ; post increment
 // ++ c ; pre increment 

console .log ("c = " , c);    // y increment h

d -- ; // d - 1 ; d = 15 ; post decrement
// --d // pre decrement 

console .log ("d = " , d);    // y decrement h 

//          Assingment Operators        //

let e = 5 ;
let f = 10 ;

e += 5 ; // e = e + 5
console .log ("e = ", e)

f *= 5 ; // e = e * 5 ; this is a shortcut to assign operators
console .log ("f = ", f)