//let variableName:datatype = value
let browsersdg = "chrome"; //implicit type inference -- compiler will assigns the type.
// browsersdg = 123; //let will show compile time error while reassigning different value.

console.log(browsersdg);

let stringxcg: string = "elangovan"; //explicit type inference
let stringgs = 123;

// Ts type
// basic types --> string, number, null, undefined, boolean
// arrays -
// enums -
// any - flexible data type --> it can be either a number, string or a boolean
// void

const browserVersion: number = 120; //explicit type inference
let isBrowserClosed = false; //implicit type inference
let inCognito; //any
inCognito = true; //any since declared as any
inCognito = 123; //any since declared as any

let browsers: string[] = ["chrome", "safari", "firefox"]; //dont accept other types than string
let browserVersions: any[] = [123, "asdasdasd"]; //accepts any datatype value
let browserVersions2 = ["adas", 1213];

function add(x: number, y: number): number {
  return x + y;
}

console.log(add(1, 2));

export {};
