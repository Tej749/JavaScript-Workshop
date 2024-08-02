/*
Template Literals in JS:
A way to have embeded expression in strings. 
it is enclosed in backteak (` `)

'this is a template literal'

# String Interpolation:
  To create strings by doing substitution of placeholders
  `string text ${expression} string text.`
*/

let student = {
  id: 101,
  name: "Nishu",
  std: "VI",
  fatherName: "Tej Bdr Thapa",
  add: "Bhrikuti Nagar - 10, Nepalgunj",
  mob: 9868014825,
};
console.log(
  `${student.name} is the son of ${student.fatherName}. He is living in \n${
    student.add
  }. He is studying in std ${student.std}. His guardian contact \nnumber is ${
    student.mob
  }. He gaine ${45 + 12908} ruppes.`
);

console.log("Football\nGame");

