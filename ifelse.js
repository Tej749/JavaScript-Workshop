// Conditional Statement
// 1. if statement

let age = 15;

if (age >= 18) {
  // if age is greate 18 then only these code will be execute.
  console.log("You can vote...!");
}

if (age < 18) {
  // if age less than age this code will execute
  console.log("Sorry!!..You can not vote....!");
}

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
}

if (mode === "light") {
  color = "white";
}

console.log(color);
