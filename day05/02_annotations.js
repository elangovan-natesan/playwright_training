//annotations in TS
// let variableName:type --> explicitly mentioning the type --> annotations
// how to custom types
var value = "typescript";
value = 123;
value = "script";
function invokeBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("execute login test");
    }
    else {
        console.log("execute add to cart test");
    }
}
invokeBrowser("chrome");
