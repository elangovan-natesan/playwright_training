/*
arithmetic operators
+ - / * %
++ - increment
-- - decrement
== - equality operator
=== - strict equality operator
*/

let num = 10;
console.log(num++); //10 post increment
console.log(num); //11

// console.log(++num); //11 pre increment

let number = 15;
console.log(num == number);

// == - equality operator compares the values of the variable.
// === - strict equality operator compares the values as well as the datatype.

let digit = 123;
let sDigit = "123";
console.log(digit == sDigit); //true
console.log(digit === sDigit); //false
