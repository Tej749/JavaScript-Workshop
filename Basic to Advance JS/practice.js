alert("Hello..This is a Java Script Practice Blogs..."); // one timpe popup
/* 
1. Get user to input a number using prompt("Enter a number")
Check if the number is a multiple of 5 or not.
*/

// let numbs = prompt("Enter a number : ");
// {
//   if (numbs % 3 === 0) {
//     console.log(numbs, "is a multiple of 3");
//   } else {
//     console.log(numbs, "is NOT a multiply of 3");
//   }
// }

/* 
2. Write a code which can give grades to students according to 
their scores.
90 - 100 : A
70 - 89 : B
60 - 69 : C
50 - 59 : D
00 - 49 : F
*/

let scores = 95;
let grades;

if (scores >= 90 && scores <= 100) {
  grades = "A Grade";
} else if (scores >= 70 && scores <= 89) {
  grades = "B Grades";
} else if (scores >= 60 && scores <= 69) {
  grades = "C Grades";
} else if (scores >= 50 && scores <= 59) {
  grades = "D Grades";
} else if (scores >= 49 && scores <= 50) {
  grades = "F Grades";
} else {
  grades = "Fail";
}
console.log(grades);
