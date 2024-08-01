console.log("Hello World..!!!.. Beautiful rainy days..");
console.log("Sujita Thapa..");
name = "Tej";
x = null;
y = undefined;
console.log(name);
console.log(x); // print comnd ; which display in browser console
b = true;

console.log(y);

// let, const & var

// 'var' : Variable can be re-declared & updated. A global scope variable
var city = "Nepalgunj";
console.log(city);

var city = "Kohalpur";
console.log(city);

// 'let' : variable cannot be re-delcared but can be updated. A block scope variable.

let school = "Holy Land High School";
console.log(school);

school = "Modern Public School";
console.log(school);

// 'const' : Variable cannot be re-declared or updated. A block scope variable.

const pi = 3.14;
console.log(pi);

// undefined variable :
let h;
console.log(h); // means there is a variable but undefined.

// block : codes defines within a curly bracke '{}' is called a block.

{
  let m = 78;
  let n = 56;
  sum = m + n;
  console.log(sum);
}
// single 'let' concept does not implement of all blocks.
{
  let m = 50;
  let n = 20;
  sum = m + n;
  console.log(sum);
}

/*  Data Tpye in JS : There is two data types:
    1. Primitive Data Types
    2. Non-Primitive Data Types

    1. Primitive Data Type : Therea 7 primitive data type are as under

*/

// 1. Primitive Data Type : There is 7 primitive data type are as under.

let bill = 150;
console.log(bill);

let firstName = "Hellen Kill"; // (ii) string data type
console.log(firstName);

isFollow = true; // (iii) boolean data type
console.log(isFollow);

let p; // (iv) undefine data type
console.log(p);

let q = null; // (v) null data type : null is a absent an object.
console.log(q);

let r = BigInt("12345"); // (vi) BigInt data type
console.log(r);

let s = Symbol("Hello World"); // (vii) symbol data type
console.log(s);

console.log(bill);

// 2. Non-Primitive Data Type

// a. object : collection of values. Its stored in key:value pairs.
const profile = {
  fullName: "Tej",
  age: 38,
  mob: "9868014825",
  add: "Nepalgunj-10, Banke",
  email: "jargha261975@gmail.com",
};

console.log(profile); // to print all data of object 'student'
console.log(profile.fullName); // to print specific data by accessing keys of value. While using dot (.) method not required to put double quote on variables.
console.log(profile["email"]); // while using square bracket method, required to put double or single quote on variablses
console.log(profile.mob);

profile["age"] = profile["age"] + 1; // with the help of this method; we can plus / minus the numeric values of the variables.
console.log(profile.age);

profile["add"] = "Bhrikuti Nagar - 10, Nepalgunj";

console.log(profile.add);

console.log(profile);

/* let : we can update the data 
  const : we can't update 
  const obj : we can't update object but we can update its keys. 
  e.g :profile["add"] = "Bhrikuti Nagar - 10, Nepalgunj";
*/

console.log(firstName);

let 