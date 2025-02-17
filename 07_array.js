//declaration of arrays
let browserName = []; //empty array
console.log(browserName);
console.log(typeof browserName);

browserName = ["chrome", "safari", "edge"];
console.log(browserName);
console.log(typeof browserName);
console.log(browserName.length);
console.log(browserName[4]);
browserName[4] = "firefox";
console.log(browserName);
console.log(browserName.length);
browserName[3] = "opera";
console.log(browserName);

browserName.push("chromium"); //adds the element at last
console.log(browserName);

browserName.pop(); // removes the last element
console.log(browserName);

browserName.unshift("chromium"); //adds the element to the first
console.log(browserName);

browserName[2] = "webkit"; //replaces the 2nd index with webkit
console.log(browserName);

browserName.shift(); //remove the first element
console.log(browserName);

browserName.splice(1, 2);
console.log(browserName);

let joinedArray = browserName.join("-"); //converts from array to string
console.log(joinedArray);

console.log(joinedArray.split("-")); //converts from string to array

let num = [10, 9, 5, 1, 11];
// num.sort();
console.log(num.sort());

let num1 = [1, 3, 5, 7];
let num2 = [...num1, 9, 11, 13]; // ... is called spread operator
console.log(num2);

let mergedArray = num1.concat(num2); // merge two arrays
console.log(mergedArray);

//heterogenous array or mixed array
let mixedArray = [1, 2, 3, "elango", true, [1, 2, 3, 4]]; //nested array i.e array inside array.
console.log(mixedArray);
console.log(mixedArray.length);
console.log(mixedArray[5]);
console.log(mixedArray[5][1]);
