// This is conditional statement code
/* 
This is the multiline comments used to define complex code
to make easy to understand
*/
// Arithmetic Operators

let a = 73;
let b = 15;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", 5 ** 2);

// Unary Operators (+=, -=)
// a++; // a = a + 1

// a++ (post increment) , a-- (post decrement)
// ++a (pred increment), --a(post decrement)

console.log("++a = ", --a);

let x = 5;
x += 4;
console.log(x);

// Multiply

x /= 2;
console.log(x);

x *= 2;
console.log(x);

let d = 3;
d++;
console.log(d);
++d;
console.log(d);

//comparision operator
let m = 15;
let n = 15;
isright = m === n; //strict
console.log(isright);

console.log(m == m);

// Logical Operator
let k = 45;
let l = 20;
let cond1 = k > l;
let cond2 = l > k;
console.log("cond1 or cond2 = ", cond1 || cond2);
console.log("!(10<8) = ", !(10 < 8));
console.log("!(10 === 10 ) = ", !(10 === 10));

// Conditional Statement : To implement some condition in the code
// If Statement

// let age = 14;

// if (age >= 18) {
//   console.log("You are eligible to Vote....");
// }

// if (age < 18) {
//   console.log("Sorry ..!! You are not eligible to vote...");
// }

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
}

if (mode === "light") {
  color = "white";
}

console.log("The color mode is ", color);

let fruit = "banana";
let result;

if (fruit === "mango") {
  result = "Passed..Fit for diet....";
} else {
  result = "sorry...!! Try Again...";
}

console.log(result);

let num = 4;

if (num % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number ");
}

let std = 18;
let gate;

if (std >= 12) {
  gate = "Eligible for test..";
} else {
  gate = "Soryy..!!!";
}

console.log("Your output result is ", gate);

// If-else Statement

console.log("---------------------------");

let rang = "red";
let clr;

if (rang === "black") {
  clr = "Black";
} else if (rang === "pink") {
  clr = "Pink";
} else if (rang === "red") {
  clr = "Red Dragon..";
} else {
  clr = "white";
}
console.log("The display color is ", clr);
console.log("-------------------------------");
