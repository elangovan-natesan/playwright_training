"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//let variableName:datatype = value
var browsersdg = "chrome"; //implicit type inference -- compiler will assigns the type.
// browsersdg = 123; //let will show compile time error while reassigning different value.
console.log(browsersdg);
var stringxcg = "elangovan"; //explicit type inference
var stringgs = 123;
// Ts type
// basic types --> string, number, null, undefined, boolean
// arrays -
// enums -
// any - flexible data type --> it can be either a number, string or a boolean
// void
var browserVersion = 120; //explicit type inference
var isBrowserClosed = false; //implicit type inference
var inCognito; //any
inCognito = true; //any since declared as any
inCognito = 123; //any since declared as any
var browsers = ["chrome", "safari", "firefox"]; //dont accept other types than string
var browserVersions = [123, "asdasdasd"]; //accepts any datatype value
var browserVersions2 = ["adas", 1213];
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
