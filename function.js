/* 
  Function in JS:
Block of code that performs a specific task, can be invoked whenever needed.

# for parameter : like a local variables --> blocks's of function
  */

function myFunction() {
  console.log("Welcome of my Function..!!");
}
myFunction(); // function : invoke

// function-II
function test(msg, n) {
  //parameter-input
  console.log(msg + n);
}
test(300, 2); // argument
test(679, 234);

// Function : Return

function sum(x, y) {
  add = x + y;
  console.log("before return code...");
  return add;
}
let val = sum(4, 5);
console.log(val);
