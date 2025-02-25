//annotations in TS
// let variableName:type --> explicitly mentioning the type --> annotations
// how to custom types

type stringOrNumber = string | number;
let value: stringOrNumber = "typescript";
value = 123;
value = "script";

type supportedBrowsers = "chrome" | "safari";

function invokeBrowser(browserName: supportedBrowsers): void {
  if (browserName === "chrome") {
    console.log("execute login test");
  } else {
    console.log("execute add to cart test");
  }
}

invokeBrowser("chrome");
// intersection --> &

type Employee = { id: number; empName: string };
type Department = { department: string };

type Team = Employee & Department;
let team: Team = { id: 1003, empName: "elango", department: "QA" };

console.log(team);

//union or will take any one of the multiple values
