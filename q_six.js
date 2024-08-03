/*
Q. Create a function using the "function" keyword that takes a String
as an argument & return the number of vowels in the string. 
*/
function countVowels(str) {
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
  console.log(count);
}

countVowels("Tej Bahadur Thapa");
