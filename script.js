// Comments in JS
// comment defince code to make easy to understand (Single Line Comment)
/*
comment using more than two line use multiline comment
*/

// Operators in JS : used to perform some operation on data

// 1. Arithmetic Operators.

let a = 20;
let b = 10;
console.log("a = 20 & b = 10"); // define variable values
console.log("a + b = ", a + b); // (i) addition operators
console.log("a - b = ", a - b); // (ii) substraction operators
console.log("a * b = ", a * b); // (iii) multiplication operators
console.log("a / b = ", a / b); // (iv) division operators
console.log("a % b = ", a % b); // (v) Modulus Operator
console.log("a ** b = ", a * b); // (vi) exponential operators
// (vii) unary operator
let x = 5;
let y = 2;
console.log("x = ", x, " &  y = ", y);

// Increment
// x++ (post increment) and ++x (pre-increment)

y = ++y; // increase by 1, pre-increment
console.log(y);

console.log(++x); // within print log, ++x ; pre-increment

// Decrement
console.log(x);

// 2. Assignment Operators
/* 
    t = 4  & u = 2
    t += 4  (t = t + 4)
    t -= 4  (t = t - 4)
    t *= 4  (t = t * 4)
    t /= 4  (t = t / 4)
    t %= 4  (t = t % 4)
    t *= 4  (t = t ** 4)
*/
let t = 4;
t += 4;
console.log("t = ", t);

t *= 4;
console.log("t = ", t);

// 3. Comparison Operators : true or false
// In comparison operator one value compare to another value.

let c = 15;
let d = 10;

console.log("let a = 15 &  d = 10 ");
console.log("c > d = ", c > d);
console.log("c < d = ", c < d);
console.log("c <= d = ", c <= d);
console.log("c >= d = ", c >= d);
console.log("c != d = ", c != d);
console.log("c == d =", c == d);
console.log("c !== d = ", c !== d);

/* 4. Logical Operators : 
    - It is somehow similar to comparison operators
    - logical operators combines two or more than two conditions / expression to evaluate final answer. 
    - Output will be given in boolean value 'true' or 'false'
    Types :
    a.  Logical AND : &&
    b.  Logical OR  : ||  
    c.  Logical NOT : !
*/

// a. logical AND : &&
let m = 10;
let n = 15;
let cond1 = m < n; // true
let cond2 = n === 15; // true

console.log("cond1 && cond2 = ", cond1 && cond2); // both condition are met & result give True

console.log(cond1 !== cond2);
