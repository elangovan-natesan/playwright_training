let username = "sinduja"; //literal

console.log(typeof username);
console.log(username.length);

let user = new String("sindhuja"); //string object
console.log(typeof user);
console.log(user.length);

let deal = ` today's deal is "50%"`;
console.log(deal);

let price = 1000;
console.log(`price of the product is ` + price);
console.log(`price of the product is ${price}`);

let firstCh = username.charAt(0);
console.log(firstCh);
let lastCh = username.charAt(username.length - 1);
console.log(lastCh);

let chPosition = username.indexOf("i");
console.log(chPosition);

console.log(username.split("")); //delimiter
console.log(deal.split(" ")); //delimiter

console.log(deal.split("s")); //delimiter

console.log(deal.slice(10, 12));

let presence = deal.includes("deal");
console.log(presence);

console.log(username.toUpperCase());
console.log(username.toLowerCase());

console.log(deal);
console.log(deal.trim()); //removes the space from the start and end

let pdtPrice = "price = 1200";
console.log(pdtPrice.slice(8, 14));
let fixedPrice = pdtPrice.slice(8, 14);
console.log(fixedPrice + 12);
let parsedValue = parseInt(fixedPrice); //converts string inti integer
console.log(parsedValue + 12);

//reverse a string starts.
let reversedString = "";
for (let i = username.length - 1; i >= 0; i--) {
  console.log(username.charAt(i));
  reversedString += username.charAt(i);
  //   reversedString += username.charAt(i); //undefined + value if this variable is only declared.
}
console.log(reversedString);
//reverse a string ends.

let splittedUsername = username.split("");
console.log(splittedUsername);

let reversedSplittedUsername = "";
for (let i = splittedUsername.length - 1; i >= 0; i--) {
  reversedSplittedUsername += splittedUsername[i];
}

console.log(reversedSplittedUsername);
