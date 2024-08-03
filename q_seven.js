/*
Q. Create a function using the "function" keyword that takes a String
as an argument & return the number of vowels in the string. 
*/
function countVowels(str) {}
const countVowe = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
  }
  return count;
};

let s = countVowe("Tej Bdr Thapa");
console.log(s);
