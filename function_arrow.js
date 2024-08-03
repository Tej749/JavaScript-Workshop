/* 
Arrow Functions :
    Compact way of writing a functions
    syntax:
        const function_name = (param1, param2) => {
            // do some works
        }
*/
// sum function

function sum(a, b) {
  return a + b;
}

const arrowSum = (a, b) => {
  console.log(a + b);
};
arrowSum(45, 45);

// single line arrow function

const printHello = () => console.log("Hello");
printHello();
