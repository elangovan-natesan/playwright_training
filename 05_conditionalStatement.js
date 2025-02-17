let a = 5;
let b = 4;

function add() {
  let sum = a + b;

  if (sum == 10) {
    return sum;
  } else {
    return "check inputs";
  }
}

console.log(add());

// ------------------------------------------
let browser = "";

function browserName() {
  switch (browser) {
    case "chrome":
      //   console.log("Launch chrome browser");
      //   break;
      return "Launch chrome browser";
    case "safari":
      //   console.log("launch safari browser");
      //   break;
      return "Launch safari browser";

    default:
      return "default browser";
  }
}

let result = browserName();
console.log(result);
