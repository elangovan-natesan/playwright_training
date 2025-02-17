//var - redeclared and reassign
var firstname = "elangovan";
console.log(firstname);

firstname = "ilangovan";
console.log(firstname);

var firstname = "natesan";
console.log(firstname);

//let - reassigned and cant be redeclared
let lastname = "elangovan";
console.log(lastname);
lastname = "natesan";
console.log(lastname);

// let lastname = "ilangovan";//cannot be redeclared

//const - cant be reassigned and redeclared
const flname = "elano";
console.log(flname);
// flname = "xxx";
// console.log(flname);

// ---------------------------------------------------------------
let username = "elangovan"; //global variable

function varDetails(username) {
  var userId = 1234; //functional scope of a variable or local variable
  if (username.startsWith("elangovan")) {
    var pwd = "xxx"; //var is not block scope
    console.log("starts with elangovan");
    console.log(userId);
  } else {
    console.log("did not starts with elangovan");
  }
  console.log(userId);
  console.log(pwd); //var is not block scoped
}

// console.log(userId); //var is functional scoped
varDetails(username);
// ---------------------------------------------------------------
// function letDetails(username) {
//   let userId = 1234; //functional scope of a variable or local variable
//   if (username.startsWith("elangovan")) {
//     let pwd = "xxx"; //let is block scope
//     console.log("starts with elangovan");
//     console.log(userId);
//   } else {
//     console.log("did not starts with elangovan");
//   }
//   console.log(userId);
//   //   console.log(pwd); //let is block scoped
// }

// // console.log(userId);//let is functional scoped
// letDetails(username);
//---------------------------------------------------------------
