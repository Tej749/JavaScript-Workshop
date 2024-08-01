console.log("Hello !! Tej...");
let name = "Hitman Super Hero";
console.log(name);

let list = [2, 4, 6, 8, 10];
console.log(list);
console.log(typeof list);

name = "Desh";
console.log(name);
fruit = "Apple";
game = null; // absence of value
film = undefined; // those variable still not defined is called undefined variable.
isFollow = true;
console.log(film);
console.log(fruit);
console.log(isFollow);
$colour = "Pink";
_sports = "Football";
console.log($colour);
console.log(_sports);

// var :
var age = 23;
var age = 34;
var age = 89;
console.log(age);

// let :
let fit = 45;
console.log(fit);
// const
const bet = 45;
const Pi = 3.14; // constant value store which cannot be re-declared of updated.
console.log(Pi);

// undefined
let k;
console.log(k);

// const:
let song;

// A Block Scope Variable
console.log("------------------");
{
  let a = 15;
  console.log("1st block variable a = ", a);
}
{
  let a = 20;
  console.log("2nd block variable a =", a);
}
let a = "Variabel a define outside block..";
console.log(a);

// Data Type is JS: 1. Primitive & Non-Primitive Data Tye.

/* 1. Primitive Data Tpye: 
      a. Numeric 
      b. String
      c. Boolean
      d. Undefined
      e. Null
      f. BigInt
      g. 

*/

// a. Number Type (2, -2, 2.5)
let x = 56;
let y = 3.4;
console.log(x);
console.log(y);

// b. String Type
fullName = "Ram Bdr";
console.log(fullName);

// c. Boolean Type (return True or False)

isFollow = true;
isEnrolled = false;
console.log(isFollow);
console.log(isEnrolled);

// d. Undefined Type (return null) : value contain but undefined
let xy;
console.log(xy);

// e. Null : Absence of an object
let yx = null;
console.log(yx);

// f. BigInt
let m = BigInt("49749");
console.log(m);

// g. Symbol
let u = Symbol("Hello..!");
console.log(u);

const tango = {
  id: 101,
  name: "Tej",
  add: "Nepalgunj",
  mob: 9868014825,
  email: "jargha@gmail.com",
  isMember: true,
};

console.log(tango.email, tango.id, tango.isMember, tango.name);
