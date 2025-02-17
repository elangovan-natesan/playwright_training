//hoisting
// console.log(username); //undefined
// var username = "elangovan"; //here variable declaration is hoisted but its assignment is not hoisted.

// var empId;
// console.log(empId);//undefined
// empId = "3908";

// let empId;
// console.log(empId);//undefined
// empId = "3908";

// console.log(empId);//cannot access
// let empId = "3908";

// console.log(empId); //cannot access
// const empId = "3908";

// ----------------------------------------------
//--variable hoisting starts
a = 10;
console.log(a);

var a;
//--variable hoisting ends

//--function hoisting starts
callHoisting();

function callHoisting() {
  //function declaration
  console.log("function hoisting");
}
//--function hoisting ends
